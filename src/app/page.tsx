'use client';

import { ProgressIndicator } from '@/components/rules-ui/progress-indicator';
import { RuleCard } from '@/components/rules-ui/rule-card';
import { SignatureSection } from '@/components/rules-ui/signature';
import { WarningMessage } from '@/components/rules-ui/warning';

import { rules } from '@/rules';
import { Shield } from 'lucide-react';
import React, { useRef, useState } from 'react';

const STORAGE_KEY = 'psychiatrie_state';

interface StoredState {
	signed: boolean;
	name: string;
	checkedRules: number[];
}

function loadInitialState(): {
	signed: boolean;
	name: string;
	checkedRules: Set<number>;
} {
	if (typeof window === 'undefined')
		return { signed: false, name: '', checkedRules: new Set() };

	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return { signed: false, name: '', checkedRules: new Set() };

		const parsed: StoredState = JSON.parse(raw);
		return {
			signed: parsed.signed ?? false,
			name: parsed.name ?? '',
			checkedRules: new Set(parsed.checkedRules ?? []),
		};
	} catch {
		console.warn('Failed to parse stored state');
		return { signed: false, name: '', checkedRules: new Set() };
	}
}

export default function HomePage() {
	const hasLoaded = useRef(false);
	const [{ signed, name, checkedRules }, setState] = useState(() => {
		const initial = loadInitialState();
		hasLoaded.current = true;
		return initial;
	});

	const persist = (partial: Partial<StoredState>) => {
		const next = {
			signed,
			name,
			checkedRules: Array.from(checkedRules),
			...partial,
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	};

	const toggleRule = (index: number) => {
		if (signed) return;

		const next = new Set(checkedRules);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		next.has(index) ? next.delete(index) : next.add(index);
		setState({ signed, name, checkedRules: next });
		persist({ checkedRules: Array.from(next) });
	};

	const handleSign = (input: string) => {
		if (!input.trim() || checkedRules.size !== rules.length) return;

		const trimmed = input.trim();
		setState({ signed: true, name: trimmed, checkedRules });
		persist({ signed: true, name: trimmed });
	};

	const progressPercentage = (checkedRules.size / rules.length) * 100;

	if (!hasLoaded.current) {
		return (
			<main className='min-h-screen'>
				<div className='container mx-auto px-4 py-12 max-w-4xl'>
					<div className='animate-pulse space-y-4'>
						<div className='h-8 bg-muted rounded w-1/2 mx-auto'></div>
						<div className='h-4 bg-muted rounded w-1/3 mx-auto'></div>
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className='min-h-screen'>
			<div className='container mx-auto px-4 py-8 max-w-4xl'>
				<header className='text-center mb-8'>
					<div className='inline-flex items-center gap-2 mb-4'>
						<Shield className='size-8 text-primary' />
						<h1 className='text-4xl font-bold text-foreground'>
							psychiatrie regeln
						</h1>
					</div>
					<p className='text-muted-foreground text-lg mb-6'>
						wichtige grundsätze und richtlinien
					</p>

					<ProgressIndicator
						signed={signed}
						checkedCount={checkedRules.size}
						totalCount={rules.length}
						progressPercentage={progressPercentage}
					/>
				</header>

				<WarningMessage />

				<div className='space-y-3 mb-12'>
					{rules.map((rule, index) => (
						<RuleCard
							key={index}
							rule={rule}
							index={index}
							isChecked={checkedRules.has(index)}
							signed={signed}
							onToggle={() => toggleRule(index)}
						/>
					))}
				</div>

				<SignatureSection
					signed={signed}
					signatureName={name}
					allChecked={checkedRules.size === rules.length}
					onSign={handleSign}
				/>
			</div>
		</main>
	);
}

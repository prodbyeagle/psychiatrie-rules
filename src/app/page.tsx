'use client';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

import { rules } from '@/rules';
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';

const STORAGE_KEY = 'psychiatrie_rules_accepted';

export default function HomePage() {
	const [checkedRules, setCheckedRules] = useState<Set<number>>(new Set());
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === 'true') {
			setSigned(true);
		}
	}, []);

	const toggleRule = (index: number) => {
		if (signed) return;

		setCheckedRules((prev) => {
			const next = new Set(prev);
			if (next.has(index)) {
				next.delete(index);
			} else {
				next.add(index);
			}
			return next;
		});
	};

	const allChecked = checkedRules.size === rules.length;

	const handleSign = () => {
		if (!allChecked) return;
		setSigned(true);
		localStorage.setItem(STORAGE_KEY, 'true');
	};

	return (
		<main className='min-h-screen'>
			<div className='container mx-auto px-4 py-12 max-w-4xl'>
				<header className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-foreground mb-2'>
						psychiatrie regeln
					</h1>
					<p className='text-muted-foreground text-lg'>
						wichtige grundsätze und richtlinien
					</p>
				</header>

				<div className='grid gap-4 md:gap-6'>
					<article className='group p-3 rounded-lg border border-border bg-card'>
						<div className='flex items-start gap-4'>
							<div className='flex-shrink-0 size-7 bg-destructive/50 text-primary flex items-center justify-center text-sm font-semibold'>
								!
							</div>
							<div className='flex-1 space-y-2'>
								<span className='text-card-foreground leading-relaxed'>
									wenn zu viele regeln gebrochen werden, ist
									ist mit einer strafe zu rechnen.
								</span>
							</div>
						</div>
					</article>

					{!signed &&
						rules.map((rule, index) => (
							<article
								key={ulid()}
								className='group p-3 rounded-lg border border-border bg-card cursor-pointer select-none'
								onClick={() => toggleRule(index)}
								role='checkbox'
								aria-checked={checkedRules.has(index)}
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === ' ' || e.key === 'Enter') {
										e.preventDefault();
										toggleRule(index);
									}
								}}>
								<div className='flex items-start gap-4'>
									<div
										className={`flex-shrink-0 size-7 flex items-center justify-center text-sm font-semibold border ${
											checkedRules.has(index)
												? 'bg-primary text-primary-foreground border-primary'
												: 'bg-transparent border-border text-muted-foreground'
										}`}>
										{checkedRules.has(index)
											? '✓'
											: index + 1}
									</div>

									<div className='flex-1 space-y-2'>
										<div className='text-card-foreground leading-relaxed text-sm'>
											{rule.content}
										</div>
										{rule.note && (
											<span className='text-xs text-muted-foreground mt-1 italic'>
												{rule.note}
											</span>
										)}
									</div>
								</div>
							</article>
						))}

					{signed &&
						rules.map((rule, index) => (
							<article
								key={ulid()}
								className='group p-3 rounded-lg border border-border bg-card'>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 size-7 bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold'>
										{index + 1}
									</div>

									<div className='flex-1 space-y-2'>
										<div className='text-card-foreground leading-relaxed'>
											{rule.content}
										</div>
										{rule.note && (
											<p className='text-xs text-muted-foreground mt-1'>
												{rule.note}
											</p>
										)}
									</div>
								</div>
							</article>
						))}
				</div>

				{/* unterschrift */}
				<footer className='mt-12 text-center'>
					{signed ? (
						<>
							<span className='text-sm text-muted-foreground'>
								ich bestätige hiermit, dass ich die psychiatrie
								regeln gelesen und verstanden habe.
							</span>
							<span className='mt-2 text-xs italic text-muted-foreground'>
								(fake unterschrift)
							</span>
						</>
					) : (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										disabled={!allChecked}
										onClick={handleSign}
										className={`mt-4 rounded-md px-6 py-3 font-semibold transition-colors ${
											allChecked
												? 'bg-primary text-primary-foreground hover:bg-primary/90'
												: 'bg-muted text-muted-foreground cursor-not-allowed'
										}`}>
										ich bestätige, dass ich die regeln
										gelesen habe
									</button>
								</TooltipTrigger>
								{!allChecked && (
									<TooltipContent>
										<span>
											du musst alle regeln lesen und
											anklicken
										</span>
									</TooltipContent>
								)}
							</Tooltip>
						</TooltipProvider>
					)}
				</footer>
			</div>
		</main>
	);
}

import { CheckCircle2, Users } from 'lucide-react';
import { useState } from 'react';

import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip';

interface SignatureSectionProps {
	signed: boolean;
	signatureName: string;
	allChecked: boolean;
	onSign: (name: string) => void;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({
	signed,
	signatureName,
	allChecked,
	onSign,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [name, setName] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name.trim()) {
			onSign(name);
			setIsDialogOpen(false);
			setName('');
		}
	};

	if (signed) {
		return (
			<footer className='text-center'>
				<div className='space-y-4'>
					<div className='inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary'>
						<CheckCircle2 className='size-5' />
						<span className='font-medium'>regeln akzeptiert</span>
					</div>
					<div className='space-y-1'>
						<p className='text-sm text-muted-foreground'>
							ich bestätige hiermit, dass ich die psychiatrie
							regeln gelesen und verstanden habe.
						</p>
						<p className='text-xs italic text-muted-foreground'>
							— {signatureName}
						</p>
					</div>
				</div>
			</footer>
		);
	}

	return (
		<footer className='text-center'>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							disabled={!allChecked}
							onClick={() => setIsDialogOpen(true)}
							className={`group relative px-8 py-4 font-semibold transition-all duration-200 ${
								allChecked
									? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl'
									: 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
							}`}>
							<span className='flex items-center gap-2'>
								<Users className='size-4' />
								ich bestätige, dass ich die regeln gelesen habe
							</span>
							{allChecked && (
								<div className='absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-200' />
							)}
						</button>
					</TooltipTrigger>
					{!allChecked && (
						<TooltipContent>
							<span>
								du musst alle regeln lesen und anklicken
							</span>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className='sm:max-w-md'>
					<DialogHeader>
						<DialogTitle>unterschrift eingeben</DialogTitle>
						<DialogDescription>
							bitte gib deinen namen für die unterschrift ein.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='signature-name'>name</Label>
							<Input
								id='signature-name'
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='dein name...'
								autoFocus
							/>
						</div>
						<DialogFooter>
							<Button
								type='button'
								variant='outline'
								onClick={() => setIsDialogOpen(false)}>
								abbrechen
							</Button>
							<Button type='submit' disabled={!name.trim()}>
								unterschreiben
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</footer>
	);
};

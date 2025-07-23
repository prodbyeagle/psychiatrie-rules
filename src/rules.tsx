import type { ReactNode } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from './components/ui/hover-card';

export type Rule = {
	content: ReactNode;
	note?: ReactNode;
};

export const rules: Rule[] = [
	{
		content: (
			<>
				sprechfehler müssen sofort{' '}
				<HoverCard>
					<HoverCardTrigger className='underline decoration-dotted cursor-help text-primary hover:text-primary/80 transition-colors'>
						dokumentiert
					</HoverCardTrigger>
					<HoverCardContent className='p-3 min-w-md'>
						<div className='space-y-2'>
							<p className='text-sm font-medium'>format:</p>
							<code className='block text-xs bg-muted p-2'>
								falsches wort = richtiges wort @name
							</code>
							<p className='text-xs text-muted-foreground'>
								<span className='font-medium'>beispiel:</span>
								<br />
								<code>polnien = polen @prodbyeagle</code>
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>{' '}
				werden! wenn während des schreibens eines sprachfehlers ein
				weiterer sprachfehler passiert, z. b. beim aussprechen oder
				verschreiben, muss dieser ebenfalls{' '}
				<HoverCard>
					<HoverCardTrigger className='underline decoration-dotted cursor-help text-primary hover:text-primary/80 transition-colors'>
						dokumentiert
					</HoverCardTrigger>
					<HoverCardContent className='p-3 min-w-md'>
						<div className='space-y-2'>
							<p className='text-sm font-medium'>format:</p>
							<code className='block text-xs bg-muted p-2'>
								falsches wort = falsches wort 2 = richtiges wort
								@name
							</code>
							<p className='text-xs text-muted-foreground'>
								<span className='font-medium'>beispiel:</span>
								<br />
								<code>
									bleybläid = bayblade = beyplate = beyblade
									@andi
								</code>
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>{' '}
				werden ).
			</>
		),
		note: (
			<p className='mt-2 text-xs text-muted-foreground'>
				bitte sorgfältig dokumentieren, um missverständnisse zu
				vermeiden.
			</p>
		),
	},
	{
		content: (
			<>was in der psychiatrie passiert, bleibt in der psychiatrie.</>
		),
	},
	{
		content: (
			<>
				in der psychiatrie darf man dinge tun, die sonst in der
				öffentlichkeit nicht erlaubt wären.
			</>
		),
	},
	{
		content: <>wir schließen niemanden aus.</>,
		note: (
			<p className='mt-2 text-xs text-muted-foreground'>
				zählt nicht für personen die nicht online sind. ( ich denke mal
				das ist klar )
			</p>
		),
	},
	{
		content: (
			<>
				man darf beleidigen, doch nicht auf die eltern oder andere
				erwachsene gehen.
			</>
		),
	},
	{
		content: (
			<>
				die psychiatrie sollte, wenn möglich, immer einen laufenden{' '}
				<HoverCard>
					<HoverCardTrigger className='underline decoration-dotted cursor-help text-primary hover:text-primary/80 transition-colors'>
						recorder
					</HoverCardTrigger>
					<HoverCardContent className='p-3'>
						<div className='flex items-center gap-3'>
							<Avatar className='rounded-none'>
								<AvatarImage
									src='https://cdn.discordapp.com/avatars/272937604339466240/2f5382bb33d016c8c25b7f18acf898cc.webp'
									alt='craig avatar'
								/>
								<AvatarFallback>cr</AvatarFallback>
							</Avatar>
							<div>
								<p className='font-semibold'>@craig</p>
								<p className='text-sm text-muted-foreground'>
									bot für aufnahme
								</p>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>{' '}
				haben.
			</>
		),
	},
	{
		content: <>versprecher und bilder bitte trennen (words und gallery)</>,
	},
];

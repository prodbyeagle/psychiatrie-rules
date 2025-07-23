import { Button } from '@/components/ui/button';

import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<main className='relative flex min-h-screen flex-col items-center justify-center px-6 py-12'>
			<div className='absolute inset-0 pointer-events-none' />

			<div className='relative z-10 max-w-2xl mx-auto text-center space-y-8'>
				<div className='space-y-4'>
					<div className='text-8xl sm:text-9xl font-bold text-muted-foreground/30 select-none'>
						404
					</div>

					<h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>
						Page Not Found
					</h1>

					<p className='text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed'>
						The page you&apos;re looking for doesn&apos;t exist or
						has been moved to a different location.
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button size='lg' className='group text-base px-8' asChild>
						<Link href='/' aria-label='Go back to homepage'>
							<Home className='size-4 mr-2' />
							Back to Home
						</Link>
					</Button>
				</div>

				<div className='pt-8'>
					<p className='text-sm text-muted-foreground'>
						If you believe this is an error, please{' '}
						<Link
							href='#'
							className='hover:text-primary text-foreground transition-colors duration-200 underline decoration-dotted underline-offset-4'>
							contact support
						</Link>
						.
					</p>
				</div>
			</div>
		</main>
	);
}

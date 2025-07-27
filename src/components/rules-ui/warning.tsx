import { AlertTriangle } from 'lucide-react';

export const WarningMessage: React.FC = () => (
	<div className='mb-6'>
		<div className='group p-4 border border-destructive/20 bg-destructive/5 backdrop-blur-sm'>
			<div className='flex items-start gap-4'>
				<div className='flex-shrink-0 size-8 bg-destructive/20 text-destructive flex items-center justify-center'>
					<AlertTriangle className='size-4' />
				</div>
				<div className='flex-1'>
					<p className='text-card-foreground leading-relaxed font-medium'>
						wenn zu viele regeln gebrochen werden, ist mit einer
						strafe zu rechnen.
					</p>
				</div>
			</div>
		</div>
	</div>
);

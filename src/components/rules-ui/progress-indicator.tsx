import { Progress } from '../ui/progress';

interface ProgressIndicatorProps {
	signed: boolean;
	checkedCount: number;
	totalCount: number;
	progressPercentage: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
	signed,
	checkedCount,
	totalCount,
	progressPercentage,
}) => {
	if (signed) return null;

	return (
		<div className='max-w-md mx-auto mb-6'>
			<div className='flex items-center justify-between text-sm text-muted-foreground mb-2'>
				<span>fortschritt</span>
				<span>
					{checkedCount} / {totalCount}
				</span>
			</div>
			<Progress value={progressPercentage} className='h-2' />
		</div>
	);
};

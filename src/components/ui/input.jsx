import * as React from 'react';

import { cn } from '@components/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-9 w-full rounded-md border-neutral-900 bg-white px-40 py-22 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';

export { Input };

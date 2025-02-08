import { List } from '@components/List';
// import { Button } from '@components/ui/button';

export default function NewResourse({ className, resourses }) {
	return (
		<>
			<List
				className={`${className} ${resourses.length === 0 ? 'mb-0' : 'mb-5'} `}
				resourses={resourses}
			/>

			
		</>
	);
}

import { NewBonds } from '@components/NewBonds';
import { Resourses } from '@components/Resourses';

export default function Control() {
	return (
		<div className='flex flex-col gap-5 w-full'>
			<NewBonds />
			<Resourses />
		</div>
	);
}

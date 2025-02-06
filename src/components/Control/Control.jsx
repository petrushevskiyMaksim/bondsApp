import { NewBonds } from '@components/NewBonds';
import { Resourses } from '@components/Resourses';

export default function Control() {
	return (
		<div className='w-full ssm:flex ssm:gap-3 items-start'>
			<NewBonds />
			<Resourses />
		</div>
	);
}

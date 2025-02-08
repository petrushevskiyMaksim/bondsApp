import { NewBonds } from '@components/NewBonds';
import { Resourses } from '@components/Resourses';

export default function Control() {
	return (
		<div className='w-full h-full mb-6 ssm:flex ssm:gap-6 ssm:items-start  md:items-stretch'>
			<NewBonds />
			<Resourses />
		</div>
	);
}

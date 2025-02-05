import { Title } from '@components/Title';
import { NewResourse } from '@components/NewResourse';
import { useState } from 'react';

export default function Resourses() {
	const [resourses, setResourses] = useState([
		{ name: '1', id: 1 },
		{ name: '2', id: 2 },
		{ name: '3', id: 3 },
	]);

	return (
		<div className='new-bonds-wrapper'>
			<Title
				className={'py-2 px-3 text-lg font-semibold rounded-s-xs title'}
				text={'Полезные ресурсы'}
			/>
			<NewResourse resourses={resourses} />
		</div>
	);
}

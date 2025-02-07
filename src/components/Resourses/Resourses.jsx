import { Title } from '@components/Title';
import { NewResourse } from '@components/NewResourse';
import { useState } from 'react';

export default function Resourses() {
	const [resourses, setResourses] = useState([
		{ name: 'Московская биржа - Облигации', id: 1 },
		{ name: 'RussBonds - Информационное агенство', id: 2 },
		{ name: 'Финам - Облигации', id: 3 },
	]);

	return (
		<div className='new-bonds-wrapper flex flex-col bg-white'>
			<Title
				className={'py-2 px-3 text-lg font-semibold rounded-s-xs title'}
				text={'Полезные ресурсы'}
			/>
			<NewResourse resourses={resourses} />
		</div>
	);
}

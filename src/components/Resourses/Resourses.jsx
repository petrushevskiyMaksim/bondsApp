import { Title } from '@components/Title';
import { NewResourse } from '@components/NewResourse';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@components/ui/button';

export default function Resourses() {
	const [resourses, setResourses] = useState([
		{ name: 'Московская биржа - Облигации', id: 1 },
		{ name: 'RussBonds - Информационное агенство', id: 2 },
		{ name: 'Финам - Облигации', id: 3 },
		{ name: 'Московская биржа - Облигации', id: 1 },
		{ name: 'RussBonds - Информационное агенство', id: 2 },
		{ name: 'Финам - Облигации', id: 3 },
		{ name: 'Московская биржа - Облигации', id: 1 },
		{ name: 'RussBonds - Информационное агенство', id: 2 },
		{ name: 'Финам - Облигации', id: 3 },
	]);

	return (
		<Card>
			<Title
				className={'p-4 text-lg font-semibold text-black title'}
				text={'Полезные ресурсы'}
			/>
			<CardContent className={'pb-6 max-h-60 overflow-auto '}>
				<NewResourse
					className={'p-2 overflow-hidden h-full'}
					resourses={resourses}
				/>
			</CardContent>
			<div className='p-0.5 hover:rounded-lg hover:outline-3 hover:outline-blue-400 transition-all'>
				<Button
					className=' w-full bg-blue-600 hover:bg-blue-700 transition-colors'
					type='button'
				>
					Добавить ресурс
				</Button>
			</div>
		</Card>
	);
}

import { List } from '@components/List';
import { Button } from '@components/ui/button';

export default function NewResourse({ resourses }) {
	return (
		<div className='p-3 flex flex-col  h-full  ssm:min-w-48 md:min-w-60 lg:min-w-80'>
			<List
				className={`overflow-auto flex-auto  ${
					resourses.length === 0 ? 'mb-0' : 'mb-5'
				} `}
				resourses={resourses}
			/>
			<div className='p-0.5 hover:rounded-lg hover:outline-3 hover:outline-blue-400 transition-all'>
				<Button
					className='w-full bg-blue-600 hover:bg-blue-700 transition-colors'
					type='button'
				>
					Добавить ресурс
				</Button>
			</div>
		</div>
	);
}

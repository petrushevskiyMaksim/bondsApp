import { Title } from '@components/Title';
import { Form } from '@components/Form';

export default function NewBonds() {
	return (
		<div className='max-[500px]:mb-5 w-full bg-white'>
			<div className='new-bonds-wrapper'>
				<Title
					className={'py-2 px-3 text-lg font-semibold rounded-s-xs title'}
					text={'Добавить новую облигацию'}
				/>
				<div className='h-screen md:h-auto'>
					<Form />
				</div>
			</div>
		</div>
	);
}

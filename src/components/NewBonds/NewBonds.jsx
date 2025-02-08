import { Title } from '@components/Title';
import { Form } from '@components/Form';

export default function NewBonds() {
	return (
		<div className='max-[500px]:mb-5 h-full flex flex-col flex-1 rounded overflow-hidden bg-white '>
			<Title
				className={'p-4 md:p-6 text-lg font-semibold rounded-s-xs title'}
				text={'Добавить новую облигацию'}
			/>

			<Form />
		</div>
	);
}

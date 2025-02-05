import { Title } from '@components/Title';
import { Form } from '@components/Form';

export default function NewBonds() {
	return (
		<div className=''>
			<div className='new-bonds-wrapper'>
				<Title
					className={'py-2 px-3 text-lg font-semibold rounded-s-xs title'}
					text={'Добавить новую облигацию'}
				/>
				<div className='h-screen'>
					<Form />
				</div>
			</div>
		</div>
	);
}

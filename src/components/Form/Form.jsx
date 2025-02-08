import { Input } from '@components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@components/ui/button';
import { useForm } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/card';

export default function Form() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => console.log(data);

	console.log(watch('bondName')); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<Card className={'rounded-tr-none rounded-tl-none '}>
			<CardContent className={'h-screen md:h-auto'}>
				<form
					className='h-full p-2 md:p-2 overflow-y-auto'
					onSubmit={handleSubmit(onSubmit)}
				>
					<ul className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-2.5 mb-5'>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='bondName'>
								Название облигации
							</Label>
							<Input
								{...register('bondName', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='text'
								placeholder='Например: ОФЗ 26022'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='sumBonds'>
								Колличество облигаций
							</Label>
							<Input
								{...register('sumBonds', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 2'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label
								className={'font-bold text-gray-600'}
								htmlFor='nominalPrice'
							>
								Номинальная цена
							</Label>
							<Input
								{...register('nominalPrice', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='1000'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='buyPrice'>
								Цена покупки
							</Label>
							<Input
								{...register('buyPrice', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 847'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='brokerTax'>
								Комиссия брокера
							</Label>
							<Input
								{...register('brokerTax', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 0.3'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='buyDate'>
								Дата покупки
							</Label>
							<Input
								{...register('buyDate', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='date'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='sellDate'>
								Дата продажи
							</Label>
							<Input
								{...register('sellDate', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='date'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='couponRate'>
								Купонная ставка
							</Label>
							<Input
								{...register('couponRate', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 7.1'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='couponDate'>
								Дата ближайшего купона
							</Label>
							<Input
								{...register('couponDate', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='date'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label
								className={'font-bold text-gray-600'}
								htmlFor='couponPeriod'
							>
								Периодичность выплаты купона
							</Label>
							<Input
								{...register('couponPeriod', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 182'
							/>
						</li>
						<li className='mb-not-last grid w-full md:max-w-60 items-center gap-2'>
							<Label className={'font-bold text-gray-600'} htmlFor='NKD'>
								Накопленный купонный доход
							</Label>
							<Input
								{...register('NKD', {
									required: 'Поле обязательно для заполнения',
								})}
								className='form-input'
								type='number'
								placeholder='Например: 27.4'
							/>
						</li>
					</ul>

					<div className='ssm:inline-block hover:rounded-lg p-0.5 hover:outline-3 hover:outline-blue-400 transition-all'>
						<Button
							className=' w-full bg-blue-600 hover:bg-blue-700 transition-colors'
							type='submit'
						>
							Добавить облигацию
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}

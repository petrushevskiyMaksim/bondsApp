import { useState } from 'react';
import { Title } from '@components/Title';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export default function PortfolioBonds() {
	const [bonds, setBonds] = useState([
		{
			id: 1,
			NKD: '5',
			bondName: 'ofz 123213',
			brokerTax: '0.3',
			buyDate: '0123-03-12',
			buyPrice: '900',
			couponDate: '0123-03-12',
			couponPeriod: '182',
			couponRate: '7',
			nominalPrice: '1000',
			sellDate: '0123-03-12',
			sumBonds: '2',
		},
		{
			id: 2,
			NKD: '44',
			bondName: 'OFZ 1212113',
			brokerTax: '0.5',
			buyDate: '0123-03-12',
			buyPrice: '800',
			couponDate: '0123-03-12',
			couponPeriod: '182',
			couponRate: '6',
			nominalPrice: '1000',
			sellDate: '0123-03-12',
			sumBonds: '3',
		},
		{
			id: 3,
			NKD: '18',
			bondName: 'ОФЗ 24441',
			brokerTax: '0.7',
			buyDate: '0123-03-12',
			buyPrice: '700',
			couponDate: '0123-03-12',
			couponPeriod: '182',
			couponRate: '9',
			nominalPrice: '1000',
			sellDate: '0123-03-12',
			sumBonds: '5',
		},
	]);

	return (
		<div className=' bg-white new-bonds-wrapper'>
			<Title
				className={'py-2 px-6 text-lg font-semibold rounded-s-xs title'}
				text={'Портфель облигаций'}
			/>
			<Table className={''}>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className='text-right'>Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className={''}>
					{bonds.map(bond => {
						return (
							<TableRow key={bond.id}>
								<TableCell className='font-medium'>{bond.bondName}</TableCell>
								<TableCell>{bond.nominalPrice}</TableCell>
								<TableCell>{bond.buyPrice}</TableCell>
								<TableCell className='text-right'>{bond.couponRate}</TableCell>
								<TableCell className='text-right'>{bond.couponRate}</TableCell>
							</TableRow>
						);
					})}
					{/* <TableRow>
						<TableCell className='font-medium'>INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className='text-right'>$250.00</TableCell>
					</TableRow> */}
				</TableBody>
			</Table>
		</div>
	);
}

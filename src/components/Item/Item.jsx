import { RxExternalLink } from 'react-icons/rx';

export default function Item({ item }) {
	return (
		<li className='last-child'>
			<a className='inline-flex items-center gap-2' href='#'>
				<RxExternalLink className='stroke-1 shrink-0' />
				<span className=' text-blue-500'>{item.name}</span>
			</a>
		</li>
	);
}

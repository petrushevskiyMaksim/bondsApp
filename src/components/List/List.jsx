import { Item } from '@components/Item';

export default function List({ resourses, className }) {
	return (
		<ul className={className}>
			{resourses?.map(el => {
				return <Item key={el.id} item={el} />;
			})}
		</ul>
	);
}

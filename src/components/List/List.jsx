import { Item } from '@components/Item';

export default function List({ className, resourses }) {
	console.log(resourses);
	return (
		<ul className={className}>
			{resourses?.map(el => {
				console.log(el.id);

				return <Item key={el.id} item={el.name} />;
			})}
		</ul>
	);
}

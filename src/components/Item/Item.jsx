export default function Item({ key, item, className }) {
	console.log(key);

	return (
		<li key={key} className={className}>
			{item}
		</li>
	);
}

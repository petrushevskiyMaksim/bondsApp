export default function Input({ type, placeholder, value, required }) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			required={required}
		/>
	);
}

export default function Table({ bonds }) {
	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full bg-white '>
				{/* Шапка таблицы */}
				<thead>
					<tr className='bg-gray-100'>
						<th className='px-4 py-2 '>Колонка 1</th>
						<th className='px-4 py-2 '>Колонка 2</th>
						<th className='px-4 py-2 '>Колонка 3</th>
						<th className='px-4 py-2 '>Колонка 4</th>
						<th className='px-4 py-2 '>Колонка 5</th>
						<th className='px-4 py-2 '>Колонка 6</th>
						<th className='px-4 py-2 '>Колонка 7</th>
						<th className='px-4 py-2 '>Колонка 8</th>
						<th className='px-4 py-2 '>Колонка 9</th>
						<th className='px-4 py-2 '>Колонка 10</th>
						<th className='px-4 py-2 '>Действия</th>
					</tr>
				</thead>
				{/* Тело таблицы */}
				<tbody>
					{bonds.map(row => (
						<tr key={row.id} className='hover:bg-gray-50'>
							<td className='px-4 py-2 border'>{row.col1}</td>
							<td className='px-4 py-2 border'>{row.col2}</td>
							<td className='px-4 py-2 border'>{row.col3}</td>
							<td className='px-4 py-2 border'>{row.col4}</td>
							<td className='px-4 py-2 border'>{row.col5}</td>
							<td className='px-4 py-2 border'>{row.col6}</td>
							<td className='px-4 py-2 border'>{row.col7}</td>
							<td className='px-4 py-2 border'>{row.col8}</td>
							<td className='px-4 py-2 border'>{row.col9}</td>
							<td className='px-4 py-2 border'>{row.col10}</td>
							<td className='px-4 py-2 border'>
								<button
									onClick={() => handleDelete(row.id)}
									className='text-gray-500 hover:text-gray-700'
								>
									⋮
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

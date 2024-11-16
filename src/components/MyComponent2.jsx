// import { Fragment } from 'react'; - нужно импортировать для его использования

const getValue = () => 123;

export const MyComponent2 = () => {
	const tagName = 'div';
	return (
		// <label>Значение</label> - может быть только один родительский элемент
		// чтобы не делать лишние теги есть - <></> (<Fragment></Fragment> - полное название тега)
		<>
			<label>Значение</label>

			<div
				className={tagName + 'Element'}
				style={{ width: '100px', marginTop: '20px' }}
			>
				{getValue()}
			</div>
		</>
	);
};

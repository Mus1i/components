import { useState } from 'react';
export const EventResponse = () => {
	const [value, setValue] = useState(0);
	const onClick = (event) => {
		setValue(value + 1);
	};

	const [showText, setShowText] = useState(true);
	const onClickShow = () => {
		setShowText(!showText);
	};
	const text = <div>Какой-то текст</div>;
	return (
		<>
			<div>{value}</div>
			<button onClick={onClick}>Прибавить +1</button>

			{showText && text}
			<button onClick={onClickShow}>
				{showText ? 'Скрыть' : 'Показать'} текст
			</button>
		</>
	);
};

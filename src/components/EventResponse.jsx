import { useState } from 'react';
import styles from '../css/EventResponse.module.css';

export const EventResponse = () => {
	const [value, setValue] = useState(0);
	const onClick = (event) => {
		setValue(value + 1);
	};

	const [showText, setShowText] = useState(true);
	const onClickShow = () => {
		setShowText(!showText);
	};

	const [showRedText, setShowRedText] = useState(false);
	const onClickRed = () => {
		setShowRedText(!showRedText);
	};
	const text = (
		<div className={showRedText ? styles.red : styles.white}>Текст для красного</div>
	);
	return (
		<>
			<div>{value}</div>
			<button onClick={onClick}>Прибавить +1</button>

			{showText && <div>Какой-то текст</div>}
			<button onClick={onClickShow}>
				{showText ? 'Скрыть' : 'Показать'} текст
			</button>

			{text}
			<button onClick={onClickRed}>{showRedText ? 'Красный' : 'Белый'}</button>
		</>
	);
};

// Чтобы добавлять обработчики события на элемент в JSX, используются специальные атрибуты с названиями в camelCase вида onEvent (например, onClick). Их необходимо добавлять на сам элемент и передавать в фигурных скобках функцию-обработчик (не вызывая её).
// В React функция для обработки события принимает объект (event) с данными события, как и в JS, но за исключением того, что приходит объект не оригинального JS-события, а синтетического.
// Объекты событий в React являются синтетическими событиями, обёртками над оригинальными, которые позволяют обеспечить кросс-браузерность приложения.
// В состоянии React нельзя хранить функции.
// Актуальное значение состояния будет содержаться в переменной состояния только после следующего рендера компонента, а не сразу после вызова функции обновления.
// Если при обновлении состояния устанавливаемое значение вычисляется от предыдущего, то для получения актуального измененного значения в функцию обновления необходимо передать callback, принимающий предыдущее состояние и возвращающий обновленное:
// setValue(v => v + 1);
// setValue(v => v + 1);
// setValue(v => v + 1);
// С помощью условного рендеринга можно определить, какой компонент или элемент должен быть отображен на странице в зависимости от заданного условия.

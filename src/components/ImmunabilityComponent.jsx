import { useState } from 'react';

export const ObjComponent = () => {
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });
	// obj.a = 20 - неправильно;
	if (obj.a === 10) {
		// setObj({ a: 20, b: 20, c: 30 }); // правильно
		setObj({ ...obj, a: 20 }); // тоже правильно, если нужно поменять одно
	}
	return <div>{obj.a}</div>;
};

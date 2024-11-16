import { formatInTimeZone } from 'date-fns-tz';
import { useState } from 'react';

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const TimeComponent = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const timeString = formatInTimeZone(currentDate, timeZone, 'HH:mm:ss');

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);
	return <div>{timeString}</div>;
};

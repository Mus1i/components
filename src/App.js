import logo from './logo.svg';
import styles from '../src/css/App.module.css';
import { TimeComponent } from './components/CurrentTimeComponent';
import { EventResponse } from './components/EventResponse';
// import { MyComponent } from './components/MyComponent';
// import { MyComponent2 } from './components/MyComponent2';
// import { NullComponent } from './components/NullComponent';
// import { ObjComponent } from './components/ImmunabilityComponent';
// import { Component } from './components/Rendering';

function App() {
	/*const onClick = () => {
		console.log(123);
	};*/
	return (
		<div className={styles.app} /*onClick={onClick}*/>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt="logo" />

				<TimeComponent />
				<EventResponse />
				{/* <Component /> */}
				{/* <ObjComponent /> */}
				{/* <NullComponent /> */}
				{/* <MyComponent type="normal" value="123" /> */}
				{/* <MyComponent2 /> */}
			</header>
		</div>
	);
}

export default App;

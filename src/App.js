import logo from './logo.svg';
import './App.css';
// import { MyComponent } from './components/MyComponent';
import { MyComponent2 } from './components/MyComponent2';
import { NullComponent } from './components/NullComponent';
import { TimeComponent } from './components/CurrentTimeComponent';
import { ObjComponent } from './components/ImmunabilityComponent';
import { Component } from './components/Rendering';
import { EventResponse } from './components/EventResponse';

function App() {
	/*const onClick = () => {
		console.log(123);
	};*/
	return (
		<div className="App" /*onClick={onClick}*/>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<TimeComponent />
				<EventResponse />
				<Component />
				<ObjComponent />
				<NullComponent />
				{/* <MyComponent type="normal" value="123" /> */}
				<MyComponent2 />
			</header>
		</div>
	);
}

export default App;

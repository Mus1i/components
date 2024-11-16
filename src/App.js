import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { MyComponent2 } from './components/MyComponent2';
import { NullComponent } from './components/NullComponent';
import { TimeComponent } from './components/Time';

function App() {
	return (
		<div className="App">
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
				<NullComponent />
				{/* <MyComponent type="normal" value="123" /> */}
				<MyComponent2 />
			</header>
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'; // using use state with different types.
import UseEffectDemo from './components/UseEffectDemo'; // useEffect and contion on Use effect
import HookMouse from './components/HookMouse'; // runing only once
import MouseContainer from './components/MouseContainer'; // use effect with cleanup
import IntervalCounter from './components/IntervalCounter'; // mistake bignner make
import DataFetching from './components/DataFetching'; //Data Fetching using useEffect
import { UserProvider } from './components/userContext'; // use Context
import CounterOne from './components/CounterOne'; //useReducer
import CounterTwo from './components/CounterTwo'; //useReducer with objects 
import DatafetchingOne from './components/DatafetchingOne'; // data fetching with reducer
import ParentComponent from './components/ParentComponent'; // useCallback implementation
import UseMemoDemo from './components/UseMemoDemo'; //use memo implementation
import DocTitle from './components/DocTitle';
import CustomCounter from './components/CustomCounter';

function App() {
	return (
		<div className="App">
			<CustomCounter/>
			<DocTitle/>
			{/* <UseMemoDemo/> */}

			{/* <ParentComponent/> */}
			
			{/* <DatafetchingOne /> */}
			{/* <CounterTwo/> */}
			{/* <CounterOne/> */}

			{/* <UserProvider value="Anurag">
				<DataFetching /> 
			</UserProvider> */}
			{/* <IntervalCounter/> */}

			{/* <MouseContainer/> */}
			{/* <HookMouse/>       */}
			{/* <Counter></Counter> */}
			{/* <UseEffectDemo/> */}
		</div>
	);
}

export default App;

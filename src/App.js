// import logo from './logo.svg';
// import './App.css';

// import Constructor from "./Component.js/Constructor";
// import DidMount from "./Component.js/DidMount";
// import GetDerived2 from "./Component.js/GetDerived2";
import DidUpdate from "./Component.js/DidUpdate";
import GetSnap from "./Component.js/GetSnap";
import UnMount from "./Component.js/UnMount";
import Update from "./Component.js/Update";
import Reference from "./Hooks/Reference";
import UseEffect from "./Hooks/UseEffect";
import UseState from "./Hooks/UseState";
// import GetDerived from "./Component.js/GetDerived";

function App() {
  return (<div>
    {/* <Constructor/> */}
    {/* <GetDerived changeColor="yellow"/> */}
    {/* <DidMount/> */}
    {/* <GetDerived2 changeColor="yellow"/> */}
    <Update/>
    <GetSnap/>
    <DidUpdate/>
    <UnMount/>
    <UseState/>
    <UseEffect/>
    <Reference/>
    </div>
  );
}

export default App;

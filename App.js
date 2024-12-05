import logo from './logo.svg';
import './App.css';
import Funccompt from './Funccompt';
import Name from './Name';
import ClassComp from './ClassComp';
import RahulFuncomp from './RahulFuncomp';
import Newcls from './Newcls';
import MyStateComp from './MyStateComp';
import ConditionalApp from './ConditionalApp';
import HomeWork from './HomeWork';
import ParentComp from './ParentComp';
import CLickCOunterCOmp from './CLickCOunterComp';
import HocComp from './HocComp';
import MyimagesComp from './MyimagesComp';
import Usecomp from './Usercomp';
import ErrorBoundary from './ErrorBoundaryComp';
import VirtualDom from './VirtualDom';
import Task2 from './Task2';
import EmpDetails from './Task3';









function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <h1>MAddy</h1>
      <Funccompt fname="Neymar" post="fullstack"></Funccompt>
     <Name></Name>
     <ClassComp fname="messi" post="football player"></ClassComp>
     {/* <RahulFunComp fname="ronaldo" lname="cris" salary={10000} gender="male"></RahulFunComp> */}
     {/* <RahulFuncomp fname="ronaldo" lname="cris" salary={10000} gender="male"></RahulFuncomp>
      <Newcls/>
      <MyStateComp></MyStateComp>
      <ConditionalApp></ConditionalApp>
      <HomeWork></HomeWork>
      <ParentComp gender="male" contact={7647384738}></ParentComp>
      <CLickCOunterCOmp></CLickCOunterCOmp>
      <HocComp></HocComp> */} 
      <MyimagesComp></MyimagesComp>
      <Usecomp user="marco"></Usecomp>
      <ErrorBoundary><Usecomp user="jogir"
        /></ErrorBoundary>
        <ErrorBoundary><Usecomp user="hogir"
        /></ErrorBoundary>
        <ErrorBoundary><Usecomp user="pogir"
        /></ErrorBoundary>
     <ErrorBoundary><Usecomp user="ogaa"
        /></ErrorBoundary>
      <ErrorBoundary><Usecomp user="madrid"
      /></ErrorBoundary>
     <VirtualDom></VirtualDom>
     <Task2></Task2>
     <EmpDetails></EmpDetails>




    </div>
  )
}

export default App;

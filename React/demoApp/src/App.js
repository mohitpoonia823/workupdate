import React,{useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/demo/DemoOutput';

function App() {

const [showParagraph, setShowParagraph] = useState(false);

const btnClickEventhandler = useCallback(() =>{
  setShowParagraph(!showParagraph);
},[]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={btnClickEventhandler}>click here</Button>
    </div>
  );
}

export default App;

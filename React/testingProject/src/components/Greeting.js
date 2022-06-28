import React, { useState } from "react";
import Output from './Output';
const Greeting = () => {

    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () =>{
        setChangeText(true);
    }
  return (
    <div>
      <h1>hello world</h1>
      {!changeText && <Output>Its good to see you</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>ChangeText</button>
    </div>
  );
};

export default Greeting;

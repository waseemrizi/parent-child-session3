import React from 'react';
import Child from './child';


function App() {
  return (
    <div className="Child">
      <h1>this hello is from all </h1>
      {/* <Child></Child> */}
      <hr/>
      <Child name="waseem" subject="IT" semester="final" />
      <hr/>
      <Child name="mohsin" subject="IT" semester="final" />


    </div>
    
  );
}

export default App;
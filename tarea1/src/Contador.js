import React, {useState} from "react";

function Contador(){    
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [actual, setCount] = useState(0);
    let anterior;

    Incrementar = () =>{
      setCount(actual+1);
    }
  return (
    <div>
      <p>You clicked {actual} times</p>
      <p>Anterior {anterior}</p>
      <button onClick={Incrementar()}>
        Incrementar
      </button>
    </div>
  );
}
export default Contador;
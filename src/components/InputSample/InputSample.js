import React from "react";
import "./InputSample.css";

const InputSample = () => {
  console.log("paint inputSample");

  //State to store input value.
  const [name, setName] = React.useState("");

  //useRef for DOM access
  const inputReference = React.useRef(null);

  //Function for input-sample__btn - input value refresh
  const getInputValue = () => {
    console.log(inputReference.current);
    console.log(inputReference.current.value);
    setName(inputReference.current.value);
  };

  return (
    <div className="input-sample">
      <p>El valor atual es {name}</p>

      {/* <input
        onChange={(event) => {
          return setName(event.target.value);
        }}
        type="text"
        placeholder="enter name"
      /> */}

      <input
        autoFocus={true}
        className="input-sample__input"
        ref={inputReference}
        type="text"
        placeholder="enter name..."
      />
<p><button className="input-sample__btn" onClick={getInputValue}>
        Refresh Value
      </button></p>
<p><button className="input-sample__btn" onClick={ () => inputReference.current.focus()}>
        Focus input field to fill.
      </button></p>
      
    </div>
  );
};

export default InputSample;

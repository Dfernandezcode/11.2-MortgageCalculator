import React from "react"
import "./InputSample.css"

const InputSample = () => {

    console.log("paint inputSample");

    //State to store input value.
    const [name, setName] = React.useState("")

    //useRef for DOM access
return(

    <div className="input-sample">
        <p>El valor atual es { name }</p>

        <input onChange={ (event) => {
            return setName(event.target.value);
        } } type="text" placeholder="enter name"/>
    </div>
)
}

export default InputSample;
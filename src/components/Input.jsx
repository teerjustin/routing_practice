import React, { useState, useEffect, } from  'react';


const Input = (props) => {
    console.log(props);
    console.log("PROPS INPUT:", props.input)
    console.log('first Color', props.firstColor);
    console.log('second color', props.secondColor);

    const [newInput, setNewInput] = useState("");
    const hStyle = {color: props.firstColor,
                    backgroundColor:props.secondColor,
    }
    const checkInput = () => {
        console.log("calling the function")
        if (isNaN(+props.input)) {
            console.log(isNaN(+props.input))
            var wordSentence = "Your word is ";
            var wordInput = "";
            wordInput = props.input;
            console.log(wordInput);
            setNewInput(wordSentence + wordInput);
            console.log(newInput)
        }
        else {
            setNewInput("Your number is " + props.input)
        }
    }

    useEffect(() => {
        checkInput();
    }, []);

    return (
        <div>
            <h3 style={hStyle}>{newInput}</h3>
        </div>

    )
}
export default Input
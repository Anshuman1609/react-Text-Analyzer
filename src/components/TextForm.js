import React, { useState } from 'react';


const TextForm = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log('Capitalized');
        // console.log('upper' + text);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Handling Extra Space!", "success");
    }
    const handleCapClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Capitalized!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied the Text!", "success");
    }
    const handleInvClick = () => {
        let newText = "";
        let i = 0;
        while (i < text.length) {
            let n = text.charAt(i);
            if (n === n.toUpperCase()) {
                n = n.toLowerCase();
            }
            else {
                n = n.toUpperCase();
            }
            i += 1;
            newText += n;
        }
        setText(newText);
        props.showAlert("Inversely Converted!", "success");
    }
    const handleTiClick = () => {
        let newText = text.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        setText(newText);
        props.showAlert("Changing the title!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear the Area!", "success");
    }

    const handleOnChange = (event) => {
        // console.log('Change');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color : (props.mode)==='dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} style={{backgroundColor : (props.mode)==='light' ? 'white' : '#13466e', color : (props.mode)==='dark' ? 'white' : '#042743' }} onChange={handleOnChange}
                        className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleInvClick}>Inverse</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTiClick}>Title Case</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color : (props.mode)==='dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}

export default TextForm;
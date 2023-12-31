import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [vowel, setVowelCount] = useState(0);
    const [jsx, setJsx] = useState("");

    // Here event is representing current invoking object by which this arrow function is get called.
    const textareaChanged = (event) => {
        setText(event.target.value);
    }

    const upperCaseClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);

        if (text.length !== 0)
            props.alertIntoTextArea("Converted into upper case", "success");
        else
            props.alertIntoTextArea("Enter some text in textarea", "danger");
    }

    const lowerCaseClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length !== 0)
            props.alertIntoTextArea("Converted into lower case", "success");
        else
            props.alertIntoTextArea("Enter some text in textarea", "danger");
    }

    const clearTextarea = () => {
        if (!(text.length > 0)) return;
        setText("");
        setVowelCount(0);
        setJsx("");
        if (text.length !== 0)
            props.alertIntoTextArea("Text removed", "danger");
        else
            props.alertIntoTextArea("Enter some text", "danger");
    }

    const vowelConsCount = () => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') count++;
            else if (text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U') count++;
        }
        setVowelCount(count);
        // return countVowel;
    }

    const jsxConverter = () => {
        let classReplace = text.replaceAll('class=', 'className=');

        let hrefHandler = classReplace.replaceAll('href="#"', 'href="/"');

        let forHandler = hrefHandler.replaceAll('for=', 'htmlFor=');

        setJsx(forHandler);

        //Alert message and type...
        // Since above JSX code handle only the three differeneces so for rest of them I want to show a warning alert along with message
        // Otherwise show the success alert with message...
        let result = text.includes('<input') || text.includes('<img') ? true : false
        if(text.length !== 0)
            props.alertIntoTextArea(result ? "Converted but check the closing tags" : "Converted into JSX code", result ? "warning" : "success")
        else
            props.alertIntoTextArea("Enter some text in textarea", "danger");
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);

        // Setting alert message and type....
        if(text.length !== 0)
            props.alertIntoTextArea("Text Copied to Clipboard", "success")
        else
            props.alertIntoTextArea("Enter some text in textarea", "danger");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

        // Setting alert message and type...
        if(text.length !== 0)
            props.alertIntoTextArea("Extra spaces removed", "success");
        else
            props.alertIntoTextArea("Enter some text in textarea", "danger");
    }

    const handlePaste = () => {
        navigator.clipboard.readText()
            .then(copiedText => {
                let newText = text + copiedText;
                setText(newText);
            })
    }

    // Object for changing the dark mode.
    let darkMode = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#595454' : 'white'

    }


    return (
        <div style={darkMode}>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">{props.textarea}</label>
                <textarea className={`form-control border my-2 border-${props.mode === 'dark'?'light':'dark'}`} style={darkMode} id="mybox" rows="8" value={text} onChange={textareaChanged}></textarea>
                <button className='btn btn-primary mx-1 my-1' onClick={upperCaseClicked}>Convert to upper case</button>
                <button className="btn btn-success mx-1 my-1" onClick={lowerCaseClicked}>Convert to lower case</button>
                <button className="btn btn-info mx-1 my-1" onClick={vowelConsCount}>Count V & C</button>
                <button className="btn btn-danger my-1 mx-1" onClick={clearTextarea}>Clear</button>
                <button className="btn btn-warning mx-1 my-1" onClick={jsxConverter}>Convert into JSX</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpace}>Remove extra spaces</button>
                <button className="btn btn-success my-1" onClick={handlePaste}>Paste</button>
            </div>

            <div className='container fw-bold'>
                {   // Regular expression in js. regEx
                    text.split(/\s+/).filter((element) => {
                        return element.length !== 0
                   }).length } words and {text.length} characters
            </div>
            <div className="container fw-bold my-2">
                {vowel} vowels and {vowel > 0 ? text.length - vowel : 0} Consonants
            </div>

            <div className="container">
                <h4 className='my-3'>Preview</h4>
                <p>{text}</p>
            </div>

            <div className="container">
                <h4 className="my-3">JSX code:- </h4>
                <pre className="fw-bold">
                    {jsx}
                </pre>
            </div>

        </div>
    )
}

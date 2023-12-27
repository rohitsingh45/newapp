import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [vowel, setVowelCount] = useState(0);
    const [jsx, setJsx] = useState("");

    const textareaChanged = (event) => {
        setText(event.target.value);
    }

    const upperCaseClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);

        props.alertIntoTextArea("Converted into upper case", "success");
    }

    const lowerCaseClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);

        props.alertIntoTextArea("Converted into lower case", "success");
    }

    const clearTextarea = () => {
        if (!(text.length > 0)) return;
        setText("");
        setVowelCount(0);
        setJsx("");

        props.alertIntoTextArea("Text removed", "danger");
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
        
        props.alertIntoTextArea(result ? "Converted but check the closing tags":"Converted into JSX code",result ? "warning" : "success")
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);

        // Setting alert message and type....
        props.alertIntoTextArea("Text Copied to Clipboard","success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

        // Setting alert message and type...
        props.alertIntoTextArea("Extra spaces removed", "success");
    }

    const handlePaste = () => {
        navigator.clipboard.readText()
            .then(copiedText => {
                let newText = text + copiedText;
                setText(newText);
            })
    }


    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">{props.textarea}</label>
                <textarea className="form-control border-black" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode==='dark'?'white':'black' }} id="mybox" rows="8" value={text} onChange={textareaChanged}></textarea>
                <button className='btn btn-primary my-2' onClick={upperCaseClicked}>Convert to upper case</button>
                <button className="btn btn-success mx-3" onClick={lowerCaseClicked}>Convert to lower case</button>
                <button className="btn btn-info mx-3" onClick={vowelConsCount}>Count V & C</button>
                <button className="btn btn-danger" onClick={clearTextarea}>Clear</button>
                <button className="btn btn-warning mx-3" onClick={jsxConverter}>Convert into JSX</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
                <button className="btn btn-secondary mx-3" onClick={handleExtraSpace}>Remove extra spaces</button>
                <button className="btn btn-success" onClick={handlePaste}>Paste</button>
            </div>

            <div className='container fw-bold'>
                {  // Uses of ternary operator at the place of if else...
                    text[text.length - 1] === " "
                        ? text.split(" ").length - 1
                        : text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters
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

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
    }

    const lowerCaseClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearTextarea = () => {
        setText("");
        setVowelCount(0);
        setJsx("");

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
    }


    return (
        <div>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">{props.textarea}</label>
                <textarea className="form-control border-black" id="exampleFormControlTextarea1" rows="8" value={text} onChange={textareaChanged}></textarea>
                <button className='btn btn-primary my-2' onClick={upperCaseClicked}>Convert to upper case</button>
                <button className="btn btn-success mx-3" onClick={lowerCaseClicked}>Convert to lower case</button>
                <button className="btn btn-info mx-3" onClick={vowelConsCount}>Count V & C</button>
                <button className="btn btn-danger" onClick={clearTextarea}>Clear</button>
                <button className="btn btn-warning mx-3" onClick={jsxConverter}>Convert into JSX</button>
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
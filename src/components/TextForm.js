import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("enter text here");
    // const {speechtext, browserSupportsSpeechRecognition} = useSpeechRecognition();

    // const startListening = () => SpeechRecognition.startListening({ continuous: true });

    // if (!browserSupportsSpeechRecognition) {
    //     return <span>Browser doesn't support speech recognition.</span>;
    //   } 

    const toUppercase = () => {
        // console.log("to uppercase");
        let new1 = text.toUpperCase();
        setText(new1);
        props.showAlert("convert to uppercase", "success");
    }
    const tolowercase = () => {
        // console.log("to uppercase");
        let new1 = text.toLowerCase();
        setText(new1);
        props.showAlert("convert to lowercase", "success");
    }
    const toCopy = () => {
        var text_cp = document.getElementById("exampleFormControlTextarea1");
        text_cp.select();
        navigator.clipboard.writeText(text_cp.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Texts are copied", "success");
    }
    const toRemoveSpaces = () => {
        let newtext = text.split(/[]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }
    const toClear = () => {
        let clearto = ' ';
        setText(clearto);
    }
    const toOnChange = (event) => {
        setText(event.target.value);
    }
    let text1 = (text.split(/\s+/).filter((ele) => {
        return ele.length !== 0;
    }).length);

    return (
        <>
            <div className='container'>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3" style={{ fontSize: "2vh" }}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" value={text} onChange={toOnChange} rows="5"></textarea>
                    {/* <div className='form-control' style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
                    {speechtext}
                </div> */}
                </div>

                <button className="btn btn-primary mx-3 my-1" disabled={text1 === 0} onClick={toUppercase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text1 === 0} onClick={tolowercase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text1 === 0} onClick={toCopy}>Click to Copy</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text1 === 0} onClick={toRemoveSpaces}>Click to remove spaces</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text1 === 0} onClick={toClear}>Click to clear </button>

            </div>
            <div className='container my-3'>
                <h3>your summary</h3>
                <p>your number of words {text1} and your character {text.length}</p>
                <p>{0.008 * text1} minutes for read</p>
                <h3>Preview</h3>
                <p>{text1 === 0 ? "Enter somthing to preview" : text}</p>
            </div>

           
        </>
    )
}

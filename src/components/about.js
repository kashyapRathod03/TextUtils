import React,{useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export default function About(props) {

    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition('please enter word');

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language:'en-IN'});

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      } 

    const toUppercase=()=>{
        let text  = transcript
        transcript = text.toUpperCase(); 
        props.showAlert("convert to uppercase","success");
    }
    // const tolowercase=()=>{
    //     // console.log("to uppercase");
    //     let new1 = text.toLowerCase();
    //     setText(new1); 
    //     props.showAlert("convert to lowercase","success");
    // }
    const toCopy=()=>{
        navigator.clipboard.writeText(transcript);
        document.getSelection().removeAllRanges();
        props.showAlert("Texts are copied","success");
    }
    // const toRemoveSpaces=()=>{
    //     let newtext = text.split(/[]+/);
    //     setText(newtext.join(" "));
    //     props.showAlert("Extra Spaces Removed!","success");
    // }
    // const toClear=()=>{
    //     let clearto = ' ';
    //     setText(clearto);
    // }
    
    let text1=(transcript.split(/\s+/).filter((ele)=>{
        return ele.length!==0;
    }).length);
   
    return (
        <>
        <div className='container'>
        <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea" className="form-label"></label>
                <div className='form-control' id='exampleFormControlTextarea' style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white', minHeight:"20vh"}}>
                    {transcript}
                </div>
            </div>

            <button className="btn btn-primary mx-3 my-1" onClick={startListening}>Start</button>
            <button className="btn btn-primary mx-3 my-1" onClick={SpeechRecognition.stopListening}>Stop</button>
            {/* <button className="btn btn-primary mx-3 my-1"  onClick={toUppercase}>Convert To UpperCase</button> */}
            {/* <button className="btn btn-primary mx-3 my-1" disabled={text1===0} onClick={tolowercase}>Convert To LowerCase</button> */}
            <button className="btn btn-primary mx-3 my-1"  onClick={toCopy}>Click to Copy</button>
            {/* <button className="btn btn-primary mx-3 my-1" disabled={text1===0} onClick={toRemoveSpaces}>Click to remove spaces</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text1===0} onClick={toClear}>Click to clear </button> */}

        </div>
        <div className='container my-3'>
            <h3>your summary</h3>
            <p>your number of words {text1} and your character {transcript.length}</p>
            <p>{0.008*text1} minutes for read</p>
            <h3>Preview</h3>
            <p>{text1===0?"Enter somthing to preview":transcript}</p>
        </div>
        </>
    )
}

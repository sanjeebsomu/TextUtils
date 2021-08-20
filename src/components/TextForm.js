import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleUpClick = ()=>{//this is a function
        let newText = text.toUpperCase();//function for Convert the text to Uppercase
        setText(newText);//this will update the value
    }
        const handleLoClick = ()=>{//this is a function
        let newText = text.toLowerCase();//function for Convert the text to Lowercase
        setText(newText);//this will update the value
    } 
           const handleClrClick = ()=>{//this is a function
        let newText = '';//function for clearing text
        setText(newText);//this will update the value
    } 
              const handleCopyClick = ()=>{//this is a function
                let text = document.getElementById('myBox');
                text.select();
                navigator.clipboard.writeText(text.value)
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);//this is for when we write something inside the box
    }
    // text = 'New Text';//this is the wrong way to change the state
    // setText("New Text");//this is the correct way to change the state
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* in the above line, we use "State" with the use of value */}
                </div>
                <button className="btn btn-info mx-1" onClick={handleUpClick} >Convert To Uppercase</button>
                <button className="btn btn-info mx-1" onClick={handleLoClick} >Convert To Lowercase</button>
                <button className="btn btn-info mx-1" onClick={handleClrClick} >Clear</button>
                <button className="btn btn-info mx-1" onClick={handleCopyClick} >Copy To Clipboard</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>Your Text contains {text.split(' ').length} Words and {text.length} Charecters</p>
                <p>{0.008 * text.split(' ').length} Minutes to Read</p>
                {/* time taken to read one word multiply with number of words */}
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

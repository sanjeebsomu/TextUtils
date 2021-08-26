import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{//this is a function
        let newText = text.toUpperCase();//function for Convert the text to Uppercase
        setText(newText);//this will update the value
        props.showAlert('The text is been converted to Uppercase', 'success')
    }
        const handleLoClick = ()=>{//this is a function
        let newText = text.toLowerCase();//function for Convert the text to Lowercase
        setText(newText);//this will update the value
        props.showAlert('The text is been converted to Lowercase', 'success')
    } 
           const handleClrClick = ()=>{//this is a function
        let newText = '';//function for clearing text
        setText(newText);//this will update the value
        props.showAlert('The text is now Cleared', 'success')
    } 
              const handleCopyClick = ()=>{//this is a function
                // let text = document.getElementById('myBox');
                // text.select();
                navigator.clipboard.writeText(text);
                // document.getSelection().removeAllRanges();
                props.showAlert('The text is now Copied to Clipboard', 'success')
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);//this is for when we write something inside the box
    }
    // text = 'New Text';//this is the wrong way to change the state
    // setText("New Text");//this is the correct way to change the state
    return (
        <>
            <div>
                <div className="mb-3">
                <h1 className='mb-4' id='heading' style={{color: props.mode ==='dark'? '#a7b1d6': 'black'}}>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'? '#000629': 'white', color: props.mode ==='dark'? '#a7b1d6': 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* in the above line, we use "State" with the use of value */}
                </div>
                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleUpClick} >Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick} >Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClrClick} >Clear</button>
                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopyClick} >Copy To Clipboard</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'? '#a7b1d6': 'black'}}>
                <h2>Your Text Summary</h2>
                <p>Your Text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Charecters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                {/* time taken to read one word multiply with number of words */}
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </>
    )
}

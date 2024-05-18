import  {useState} from 'react'

export default function TextForm(props){

    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClearText = () =>{
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleTextCopy =() =>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        document.getSelection().removeAllRanges(); 
        props.showAlert("Text Copied to Clipboard", "success");     
    }

    const handleRemoveSpace =() =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert("Removed Extra Spaces", "success");
    }

    const [text, setText]= useState('');
   
    return (
 <> 
 <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>   
    <h1 className='mb-4'>{props.heading}</h1>    
    <div className='mb-3'>  
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>    
    </div> 
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>  
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear Text</button>    
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleTextCopy}>Copy Text</button> 
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleRemoveSpace}>Remove Spaces</button>    
 </div>

 <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2> Your text summary</h2>
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text:"Nothing to preview here !"}</p>

 </div>
 </>
    )
}
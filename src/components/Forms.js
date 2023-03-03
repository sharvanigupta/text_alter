import React, {useState} from "react";

export default function Forms(props){
    const[text,setText]=useState("");

    const handleOnChange=(event)=>{
        // console.log('changed')
        setText(event.target.value)
    }

    const handleUpChange=()=>{
        let newText =text.toUpperCase();
        setText(newText);
    }

    const handleLoChange=()=>{
        let newText =text.toLowerCase();
        setText(newText);
    }

    const handleReverse = (event) => {
        let str =text.split("");
        str = str.reverse();
        let newText = str.join("");
        setText(newText);
    };

    const handleCopy=()=>{
        let text =document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();     //to remove selection from text copied
        props.showAlert("Text Copied","success")
    }

    const handleClrChange=()=>{
        let newText ='';
        setText(newText);
        props.showAlert("Text Cleared","warning")
    }

    const color = ['red', 'blue', '#042743', 'green', 'pink', 'salmon', 'teal'];
    const changeColor = (number) =>{
        document.getElementById('myText').style.color = color[number];
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const download = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showAlert("Text File Downloading","success")
      }


    return(
        <>
        <div className="container mt-3" style={{color : props.mode==='dark'? 'white':'#042743'}}>
            <h1>{props.TextName}</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'rgb(35 68 94)':'white', color : props.mode==='dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myText" rows="6"></textarea>
            </div>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpChange}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoChange}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClrChange}>Clear Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={()=>changeColor(Math.floor(Math.random() * 5))}>Change Color</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={download}>Download</button>
            
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1>Word Count -</h1>
            <p> {text.replace(/\s+/g, '').length}  Characters and {text.trim() === '' ? 0 : text.match(/\S+/g).length} Words</p>
            <p>{0.008 * text.split(" ").length} Minutes read time</p>
            <h3>Preview -</h3>
            <p>{text.length>0? text:"Nothing to preview it"}</p> 
        </div>
        
        </>
    )
}
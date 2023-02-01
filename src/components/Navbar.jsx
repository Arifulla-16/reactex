import React, { useState } from 'react'
import Element from './Element'
import Title from './Title';


function Navbar() {

    let [state,setstate] = useState("Upper-case");
    let [text,setText] = useState("Enter text here");

    const changeState = (k)=>{
        setstate(k);
    }

    const changeText = (e)=>{
        setText(e.target.value);
    }

    const parser=(e)=>{
        switch(state){
            case "Upper-case":
                setText(text.toUpperCase());
                break;
            case "Lower-case":
                setText(text.toLowerCase());
                break;
            case "Capitalization":
                let tokens = text.split(/(?:,| )+/);
                let fin;
                tokens.forEach((e)=>{
                    let temp = e.toLowerCase();
                    let st = temp.slice(0,1);
                    e=st.toUpperCase() + temp.slice(1);
                    if(fin==null){
                        fin=e;
                    }
                    else{
                        fin=fin+" "+e;
                    }
                });
                setText(fin);
                break;
            default:
                console.log(state);
        }
    }

    const reset=()=>{
        setText("");
    };

  return (
    <div>
        <span className='navbar'>
            <Title name="Starter" />
            <Element handleClick={changeState} name="Upper-case"/>
            <Element handleClick={changeState} name="Lower-case"/>
            <Element handleClick={changeState} name="Capitalization"/>
        </span> 
        <div className='inputbox'>
            <textarea name="input" value={text} onChange={changeText} onClick={reset} id="inputbox" cols="30" rows="10"></textarea>
            <br></br>
            <span className='buttons'>
                <input  type="button" value={state} onClick={parser} />
                <input  type="button" value="Reset" onClick={reset}/>

            </span>
        </div>
    </div>
  )
}

export default Navbar;
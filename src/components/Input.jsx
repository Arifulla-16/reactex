import React from 'react';

function Input() {
  return (
    <div className='inputbox'>
        <textarea name="input" id="inputbox" cols="30" rows="10"></textarea>
        <br></br>
        <input type="button" value="parse" />
    </div>
  )
}

export default Input;
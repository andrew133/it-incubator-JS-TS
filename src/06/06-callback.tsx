import React, {ChangeEvent, MouseEvent} from "react";



//window.setTimeout(callback, 1000)

export const User = () => {

const search = (event: MouseEvent<HTMLButtonElement>) =>
   alert(event.currentTarget.name);
    // const saveUser = () => alert('user have is save');

    const onNameChange = ()=> {
        console.log("Change")
    }
    const oneChangeAge = (event: ChangeEvent<HTMLInputElement>)=> {
        console.log("Change age" + event.currentTarget.value)
    }
    const focusLostHandler = ()=> {
        console.log("Focus lost")
    }

return <div> <textarea onChange={onNameChange} onBlur={focusLostHandler}>Andi</textarea>
    <input onChange = {oneChangeAge} type = {"number"}/>
        <button name="delete" onClick={search}>search</button>
        {/*<button name="save" onClick={deleteUser}>x</button>*/}
    </div>
}
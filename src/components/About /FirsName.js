import React, {useState} from "react";

function FirstName({defaultVal, nameRef}) {
    let [validationPass, setValidationPass] = useState(true);

    function checkValidation(name) {
        setValidationPass(name.trim().length >= 5);
    }

    return <>
        <input type="text" className={'form-control my-3'} defaultValue={defaultVal} onBlur={e => checkValidation(e.currentTarget.value)}
               placeholder={'Enter your first name'} ref={nameRef} />
        {
            validationPass ? '' : <p className={'text-danger'}>Minimum 5 symbols</p>
        }
    </>
}

export default FirstName;
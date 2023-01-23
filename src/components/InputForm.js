import React from "react";

const InputForm = ({infos, onChange, handleSubmit, addFormData}) => {
    return ( 
        <React.Fragment>

        <h1>Enter New Result!</h1>
    <div className="form">
        <form onSubmit={handleSubmit}>
            {infos.map((info) => <input  className="field" key={info.name} name={info.name} placeholder={info.placeHolder} type={info.type} required={info.required} onChange={onChange} min={info.type === 'number' ? 1: null} max={info.type === 'number' ? 3: null} maxLength={info.name === 'grades' ? 1 : null} value={addFormData[info.name]}></input>)}
            <button>sumbit</button>
        </form>
    </div>
        </React.Fragment>)
}
 
export default InputForm;
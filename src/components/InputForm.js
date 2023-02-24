import React from "react";

const InputForm = ({onChange, handleSubmit, addFormData}) => {
    console.log(addFormData.grades)
    return ( 
        <React.Fragment>

        <h1 className="enter">Enter New Result!</h1>
    <div >
        <form className="form" onSubmit={handleSubmit} >
            <input className="field" name="courseName" placeholder="Course-Name"  type="text" onChange={onChange} value={addFormData.courseName}></input>
            <input className="field" name="courseUnits" placeholder="Course-Unit"  type="number" onChange={onChange} value={addFormData.courseUnits}></input>
            <select className={addFormData.grades === 'Grade' ? 'field1' : 'field'} name="grades" placeholder="Grade"  type="text" onChange={onChange} value={addFormData.grades}>
                <option value='' >Grade</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
            </select>
            <button className="submitButton">submit</button>
        </form>
    </div>
        </React.Fragment>)
}
 
export default InputForm;
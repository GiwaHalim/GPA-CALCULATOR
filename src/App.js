import './App.css';
import React, { useState }from 'react';
import InputForm from './components/InputForm';
import Table from './components/Table';
import {nanoid} from 'nanoid'
import GpaValue from './components/gpaValue';


function App() {
  const Joi = require('joi')

  const schema = Joi.object({
    courseName: Joi.string().required().label('Course-Name'),
    courseUnits: Joi.number().min(1).max(3).required().label('Course-Unit'),
    grades: Joi.string().max(1).required().label('Grades')
  })

  const [result, setResult] = useState([])
  const [addFormData, setAddFormData] = useState({
    courseName: '',
    courseUnits: '',
    grades: ''
  })
  const [editId, setEditId] = useState(null)
  const [editFormData, setEditFormData] = useState(
    {
      courseName: '',
      courseUnits: '',
      grades: ''
    }
  )

  const [gpaValue, setGpaValue] = useState(null)

  const [errors, setErrors] = useState(
    {
    }
  )

  const [errorsEdit, setErrorsEdit] = useState(
    {

    }
  )

  const handleEditClick = (event, result) =>{
    event.preventDefault();
    setEditId(result.id);

    const formValues = {
        courseName: result.courseName,
        courseUnits: result.courseUnits,
        grades: result.grade
    }

    setEditFormData(formValues)
  }

  

  const handleAddFormChange = (event) =>{
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData};

      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};

    newFormData[fieldName] = fieldValue;
  

    setEditFormData(newFormData)


}

  const validate = () =>{
    const res = schema.validate(addFormData, {abortEarly: false})

    if(!res.error) return null;

    const errors = {}
    for(let item of res.error.details){
      errors[item.path[0]] = item.message;

      return errors
    } 

  }

  const validateEdit = () =>{
    const res = schema.validate(editFormData, {abortEarly: false})

    if(!res.error) return null;

    const errorsEdit = {}
    for(let item of res.error.details){
      errorsEdit[item.path[0]] = item.message;

      return errorsEdit
    } 

  }
  
  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    console.log()
    const errors = validate()
    setErrors(errors || {}) 

    if(errors) return;

    const addResult = {
      id: nanoid(),
      courseName: addFormData.courseName,
      courseUnits: addFormData.courseUnits,
      grade: addFormData.grades.toUpperCase()
    }

    const newResult = [...result, addResult];

    setResult(newResult)


    setAddFormData({
    courseName: '',
    courseUnits: '',
    grades: ''
    })
  }

  const handleEditFormSubmit = (event) =>{
    event.preventDefault();
    const errorsEdit = validateEdit()
    setErrorsEdit(errorsEdit || {}) 

    if(errorsEdit) return;

    const editedContact ={
      id:editId,
      courseName: editFormData.courseName,
      courseUnits: editFormData.courseUnits,
      grade: editFormData.grades
    }

    // if(editedContact.courseUnits === ''|| !editedContact.grade){
    //  alert('input cant be empty')
    // }else{

      const newResult = [ ...result ]
  
      const index = result.findIndex((resultIndex) => resultIndex.id === editId)
  
  
  
      newResult[index] = editedContact
  
  
      setResult(newResult)
      setEditId(null)
    // }

  }

  const handleEditCancel = () =>{
    setEditId(null)
  }

  const handleDelete = (editId) =>{
    const newResult = [...result]

    const index = result.findIndex((resultIndex) => resultIndex.id === editId)
    
    newResult.splice(index, 1)

    setResult(newResult)

  }

  const calculateGpa = () =>{

    let gradePoint =  0;
    let totalUnits = 0;
    let gpa = 0;
    for(let x in result){
      if(typeof(result[x].courseUnits) === 'string'){
        result[x].courseUnits = parseInt(result[x].courseUnits)
      }
      if(result[x].grade === "A"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 5;
      }
      if(result[x].grade === "B"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 4;
      }
      if(result[x].grade === "C"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 3;
      }
      if(result[x].grade === "D"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 2;
      }
      if(result[x].grade === "E"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 1;
      }
      if(result[x].grade === "F"){
        gradePoint += result[x].courseUnits
        totalUnits += result[x].courseUnits * 0;
      }

    gpa = totalUnits/gradePoint

    console.log(gpa)
    setGpaValue(`your Gpa is ${gpa}`)}
  } 
  return (
    <div className="App">
      <div className='container'>
        <GpaValue gpaValue={gpaValue}/>
        <form ><Table datas={result} editId={editId} handleEditClick={handleEditClick} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditCancel={handleEditCancel} handleDelete={handleDelete} errors={errorsEdit}/></form>
        <InputForm  onChange={handleAddFormChange} addFormData={addFormData} handleSubmit={handleAddFormSubmit} error={errors}/>
        <button className='gpaButton' onClick={calculateGpa}>Calculate Gpa</button>
      </div>
    </div>
  );
}

export default App;

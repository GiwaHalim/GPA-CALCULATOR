import './App.css';
import React, { useState }from 'react';
import InputForm from './components/InputForm';
import Table from './components/Table';
import data from "./result.json"
import {nanoid} from 'nanoid'


function App() {
  const cred = [
    {name: "courseName", placeHolder:"Course-Name", type:"text", required:"required" },
    {name: "courseUnits", placeHolder:"Course-Unit", type:"number", required:"required"},
    {name: "grades", placeHolder:"grade", type:"text", required:"required"}
  ]
  const alphabets = /^[a-fA-F]$/;

  const [result, setResult] = useState(data)
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

  const [gpaValue, setGpaValue] = useState(" ")

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

      if(fieldName === "grades" && !fieldValue.match(alphabets) && fieldValue !== ""){ 
          alert('grades can only be A-F')
      }else{
        newFormData[fieldName] = fieldValue;
      }


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
  
  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

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

    const editedContact ={
      id:editId,
      courseName: editFormData.courseName,
      courseUnits: editFormData.courseUnits,
      grade: editFormData.grades
    }

    const newResult = [ ...result ]

    const index = result.findIndex((resultIndex) => resultIndex.id === editId)

    newResult[index] = editedContact


    setResult(newResult)
    setEditId(null)

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
    }

    gpa = totalUnits/gradePoint

    console.log(gpa)
    setGpaValue(gpa)
  } 
  return (
    <div className="App">
      <div className='container'>
        <form ><Table datas={result} infos={cred} editId={editId} handleEditClick={handleEditClick} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditCancel={handleEditCancel} handleDelete={handleDelete}/></form>
        <InputForm  infos={cred} onChange={handleAddFormChange} addFormData={addFormData} handleSubmit={handleAddFormSubmit}/>
        <button onClick={calculateGpa}>Calculate Gpa</button>
        <p>your gpa is {gpaValue}</p>
      </div>
    </div>
  );
}

export default App;

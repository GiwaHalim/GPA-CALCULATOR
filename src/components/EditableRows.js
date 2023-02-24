const EditableRows = ({infos, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel}) => {
    return (
            <tr>
                {/* {infos.map(info => <td key={info.name}><input className="readOnlyRows" name={info.name} type={info.type} required={info.required} value={editFormData[info.name]} onChange={handleEditFormChange}></input></td>)} */}
                <td><input className="readOnlyRows" name="courseName" required="required" type="text" value={editFormData.courseName} onChange={handleEditFormChange}></input></td>
                <td><input className="readOnlyRows" name="courseUnits" required="required" type="number" value={editFormData.courseUnits} onChange={handleEditFormChange}></input></td>
                <td><select className="readOnlyRows" name="grades" required="required" value={editFormData.grades} onChange={handleEditFormChange}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                    </select></td>
                <td><button type='button' onClick={handleEditFormSubmit}>save</button></td>
                <td><button type='button' onClick={handleEditCancel}>cancel</button></td>
            </tr>
    );
}
 
export default EditableRows;
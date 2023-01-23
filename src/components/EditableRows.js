const EditableRows = ({infos, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel}) => {
    return (
            <tr>
                {infos.map(info => <td key={info.name}><input name={info.name} type={info.type} required={info.required} value={editFormData[info.name]} onChange={handleEditFormChange}></input></td>)}
                <td><button type='button' onClick={handleEditFormSubmit}>save</button></td>
                <td><button type='button' onClick={handleEditCancel}>cancel</button></td>
            </tr>
    );
}
 
export default EditableRows;
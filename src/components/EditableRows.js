const EditableRows = ({infos, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel}) => {
    return (
            <tr>
                {infos.map(info => <td key={info.name}><input className="readOnlyRows" name={info.name} type={info.type} required={info.required} value={editFormData[info.name]} onChange={handleEditFormChange} min={info.type === 'number' ? 1: null} max={info.type === 'number' ? 3: null} maxLength={info.name === 'grades' ? 1 : null}></input></td>)}
                <td><button type='button' onClick={handleEditFormSubmit}>save</button></td>
                <td><button type='button' onClick={handleEditCancel}>cancel</button></td>
            </tr>
    );
}
 
export default EditableRows;
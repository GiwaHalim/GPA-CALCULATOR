import React from "react";
import EditableRows from "./EditableRows";
import ReadOnlyRows from "./ReadOnlyRows";

const TableBody = ({answers, infos, editId, handleEditClick, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel, handleDelete}) => {
    return (answers.length === 0 ? null : 
    <tbody>
            {answers.map( answer => 
            <React.Fragment key={answer.courseName}>
                {editId === answer.id ? <EditableRows infos={infos} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditCancel={handleEditCancel}/> : <ReadOnlyRows results={answer} handleEditClick={handleEditClick} handleDelete={handleDelete}/>}
            </React.Fragment>
            )}
    </tbody>)
}
 
export default TableBody;
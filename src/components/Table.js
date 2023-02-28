import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ datas, infos, editId, handleEditClick, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel, handleDelete, errors}) => {
    console.log(errors)

    return ( 
        datas.length === 0 ? null : 
        <div className="table">
            { errors.courseUnits && <div className="errors">{errors.courseUnits}</div>}
            { errors.courseName && <div className="errors">{errors.courseName}</div>}
            { errors.grades && <div className="errors">{errors.grades}</div>}
            <table>
                <TableHead results={datas}/>
                <TableBody answers={datas} infos={infos} editId={editId} handleEditClick={handleEditClick} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditCancel={handleEditCancel} handleDelete={handleDelete}/>
            </table>
        </div>
     );
}
 
export default Table;
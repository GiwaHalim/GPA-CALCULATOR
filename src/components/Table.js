import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ datas, infos, editId, handleEditClick, editFormData, handleEditFormChange, handleEditFormSubmit, handleEditCancel, handleDelete}) => {
    return ( 
        datas.length === 0 ? null : 
        <div className="table">
            <table>
                <TableHead results={datas}/>
                <TableBody answers={datas} infos={infos} editId={editId} handleEditClick={handleEditClick} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditCancel={handleEditCancel} handleDelete={handleDelete}/>
            </table>
        </div>
     );
}
 
export default Table;
const ReadOnlyRows = ({results, handleEditClick, handleDelete}) => {
    return ( 
        <tr key={results.courseName}>
            <td>{results.courseName}</td>
            <td>{results.courseUnits}</td>
            <td>{results.grade}</td>
            <td><button type="button" onClick={(event) => handleEditClick(event, results)}>edit</button></td>
            <td><button type="button" onClick={() => handleDelete(results.id)}>delete</button></td>
        </tr>);
}
 
export default ReadOnlyRows;
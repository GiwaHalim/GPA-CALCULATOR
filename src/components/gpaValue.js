const GpaValue = ({gpaValue}) => {
    return ( 
        !gpaValue ? null :
        <div className='gpa'><p>{gpaValue}</p></div>
     );
}
 
export default GpaValue;
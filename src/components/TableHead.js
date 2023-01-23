import React from "react";

const tableHeadContents = ['Course-Name', 'Course-Units', 'Grade'];

const TableHead = ({results}) => {
    return ( <thead>
        <tr>
            {tableHeadContents.map( contents => <th key={contents}> {contents}</th>)}
            {results.length > 0 &&
            <React.Fragment>
                <th></th>
                <th></th>
            </React.Fragment>}
        </tr>
    </thead>);
}
 
export default TableHead;
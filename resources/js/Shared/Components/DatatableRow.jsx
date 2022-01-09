import React from 'react'

const DatatableRow = ({children}) => {
    return (
        <tr className="hover:bg-gray-50">
            {children}
        </tr>
    );
};

export default DatatableRow;

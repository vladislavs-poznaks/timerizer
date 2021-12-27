import React from 'react'

const Datatable = ({header, columns, children}) => {
    return (
        <div className="w-full bg-white rounded-2xl">
            <div className="align-middle inline-block min-w-full">
                <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-xl">
                    {header && <div className="p-4 flex items-center justify-end border-b border-gray-200">
                        {header}
                    </div>}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => {
                                return (
                                    <th
                                        key={index}
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column}
                                    </th>
                                )
                            })}
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Datatable;

import React from 'react'
import {Head} from '@inertiajs/inertia-react'

const Show = ({workout}) => {
    return (
        <>
            <Head title={workout.data.title}/>
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-2">
                <div className="flex items-center justify-between items-center">
                    <div>{workout.data.title}</div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.data.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                    >
                        {workout.data.public ? 'Public' : 'Private'}
                    </div>
                </div>
                <div>
                    {workout.data.description}
                </div>
            </div>
        </>
    );
};

export default Show;

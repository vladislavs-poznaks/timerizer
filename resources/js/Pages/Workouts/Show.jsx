import React from 'react'
import {Head} from '@inertiajs/inertia-react'

const Show = ({workout}) => {
    return (
        <>
            <Head title={workout.title}/>
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-2">
                <div className="flex items-center justify-between items-center">
                    <div>{workout.title}</div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                    >
                        {workout.public ? 'Public' : 'Private'}
                    </div>
                </div>
                <div>
                    {workout.description}
                </div>
            </div>
        </>
    );
};

export default Show;

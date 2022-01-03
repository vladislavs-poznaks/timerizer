import React, {useEffect, useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateSet from "@/Pages/Sets/CreateSet";
import SetCard from "@/Pages/Sets/SetCard";

const Show = ({workout, setTypes}) => {
    const [createSet, setCreateSet] = useState(false)

    return (
        <>
            <Head title={workout.title}/>
            <div className="shadow-lg rounded-xl px-10 py-4 bg-white dark:bg-gray-700 w-full space-y-2">


                <div className="flex items-center justify-between items-center">
                    <div className="font-bold text-gray-700">{workout.title}</div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                    >
                        {workout.public ? 'Public' : 'Private'}
                    </div>
                </div>
                <div>
                    {workout.description}
                </div>

                {/*<div className="flex justify-center space-x-2">*/}

                {/*    <PrimaryButton type="button" onClick={() => setCreateSet(true)}>Add set</PrimaryButton>*/}
                {/*</div>*/}
            </div>

            <div className="w-full space-y-4">
                {workout.sets.length && workout.sets.map((set, key) => <SetCard workout={workout} set={set} key={key}/>)}
            </div>

            {/*<CreateSet workout={workout} types={setTypes.data} isOpen={createSet} setIsOpen={setCreateSet} />*/}
        </>
    );
};

export default Show;

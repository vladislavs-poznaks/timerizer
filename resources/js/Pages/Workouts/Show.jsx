import React, {useEffect, useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateSet from "@/Pages/Sets/CreateSet";
import SetCard from "@/Pages/Sets/SetCard";
import ExerciseTypeRow from "../ExerciseTypes/ExerciseTypeRow";
import CreateExerciseType from "../ExerciseTypes/CreateExerciseType";
import Datatable from "../../Shared/Components/Datatable";
import Pagination from "../../Shared/Components/Pagination";
import SetRow from "../Sets/SetRow";

const Show = ({workout, setTypes}) => {
    const [createSet, setCreateSet] = useState(false)

    return (
        <>
            <Head title={workout.title}/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateSet(true)}>Create a set</PrimaryButton>}
                columns={['Title', 'Type', '']}
                // footer={<Pagination links={exerciseTypes.meta.links} />}
            >
                {workout.sets.map((set, key) => <SetRow key={key} set={set}/>)}
            </Datatable>

            {/*<CreateSet workout={workout} types={setTypes} isOpen={createSet} setIsOpen={setCreateSet}/>*/}

            {/*<div className="shadow-lg rounded-xl px-10 py-4 bg-white dark:bg-gray-700 w-full space-y-2">*/}


            {/*    <div className="flex items-center justify-between items-center">*/}
            {/*        <div className="font-bold text-gray-700">{workout.title}</div>*/}
            {/*        <div*/}
            {/*            className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}*/}
            {/*        >*/}
            {/*            {workout.public ? 'Public' : 'Private'}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {workout.description}*/}
            {/*    </div>*/}

            {/*    <div className="flex justify-center space-x-2">*/}

            {/*        <PrimaryButton type="button" onClick={() => setCreateSet(true)}>Add set</PrimaryButton>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-full space-y-4">*/}
            {/*    {workout.sets.length && workout.sets.map((set, key) => <SetCard workout={workout} set={set} key={key}/>)}*/}
            {/*</div>*/}

            {/*<CreateSet workout={workout} types={setTypes.data} isOpen={createSet} setIsOpen={setCreateSet} />*/}
        </>
    );
};

export default Show;

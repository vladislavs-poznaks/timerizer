import React, {useState} from 'react'
import {Head, Link} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateWorkout from "./CreateWorkout";
import WorkoutRow from "./WorkoutRow";
import Datatable from "../../Shared/Components/Datatable";
import Pagination from "../../Shared/Components/Pagination";

const Index = ({workouts}) => {
    const [createWorkout, setCreateWorkout] = useState(false)

    return (
        <>
            <Head title="My workouts"/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>}
                columns={['Title', 'Description', 'Status', '']}
                footer={<Pagination links={workouts.meta.links} />}
            >
                {workouts.data.map((workout, key) => <WorkoutRow key={key} workout={workout}/>)}
            </Datatable>

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout}/>
        </>
    )
        ;
};

export default Index;

import React, {useState} from 'react'
import {Head, usePage} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateWorkout from "./CreateWorkout";
import WorkoutRow from "./WorkoutRow";
import Datatable from "../../Shared/Components/Datatable";
import Pagination from "../../Shared/Components/Pagination";
import EditWorkout from "./EditWorkout";

const Index = ({workouts}) => {
    const props = usePage().props

    console.log(props)

    const [createWorkout, setCreateWorkout] = useState(false)
    const [editWorkout, setEditWorkout] = useState(false)

    const [workout, setWorkout] = useState()

    return (
        <>
            <Head title="My workouts"/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>}
                columns={['Title', 'Description', 'Status', '']}
                footer={<Pagination links={workouts.meta.links} />}
            >
                {workouts.data.map((workout, key) => <WorkoutRow key={key} workout={workout} setEditWorkout={setEditWorkout} setWorkout={setWorkout}/>)}
            </Datatable>

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout}/>
            <EditWorkout isOpen={editWorkout} setIsOpen={setEditWorkout} workout={workout}/>
        </>
    )
        ;
};

export default Index;

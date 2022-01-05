import React, {useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateWorkout from "./CreateWorkout";
import WorkoutRow from "./WorkoutRow";
import Datatable from "@/Shared/Components/Datatable";
import Pagination from "@/Shared/Components/Pagination";
import EditWorkout from "./EditWorkout";
import {Inertia} from "@inertiajs/inertia";

const Index = ({workouts}) => {

    const [createWorkout, setCreateWorkout] = useState(false)
    const [editWorkout, setEditWorkout] = useState(false)

    const [workout, setWorkout] = useState()

    const workoutEditCallback = (workout) => {
        setEditWorkout(true)
        setWorkout(workout)
    }

    const workoutDeleteCallback = (workout) => {
        if (confirm("Sure?")) {
            Inertia.delete(route('workouts.delete', workout.id))
        }
    }

    return (
        <>
            <Head title="My workouts"/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>}
                columns={['Title', 'Description', 'Status', '']}
                footer={<Pagination links={workouts.meta.links} />}
            >
                {workouts.data.map((workout, key) => <WorkoutRow key={key} workout={workout} workoutEditCallback={workoutEditCallback} workoutDeleteCallback={workoutDeleteCallback}/>)}
            </Datatable>

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout}/>
            <EditWorkout isOpen={editWorkout} setIsOpen={setEditWorkout} workout={workout}/>
        </>
    )
        ;
};

export default Index;

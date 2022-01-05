import React, {useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import CreateSet from "@/Pages/Sets/modals/CreateSet";
import Datatable from "@/Shared/Components/Datatable";
import SetRow from "../Sets/SetRow";
import CreateExercise from "../Exercises/CreateExercise";
import EditSet from "../Sets/modals/EditSet";
import {Inertia} from "@inertiajs/inertia";

const Show = ({workout, setTypes}) => {

    const [createSet, setCreateSet] = useState(false)
    const [editSet, setEditSet] = useState(false)

    const [createExercise, setCreateExercise] = useState(false)

    const [set, setSet] = useState()

    const setEditCallback = (set) => {
        setEditSet(true)
        setSet(set)
    }

    const setDeleteCallback = (set) => {
        if (confirm("Sure?")) {
            Inertia.delete(route('sets.delete', set.id))
        }
    }

    const exerciseCreateCallback = (set) => {
        setCreateExercise(true)
        setSet(set)
    }

    return (
        <>
            <Head><title>{workout.title}</title></Head>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateSet(true)}>Create a set</PrimaryButton>}
                columns={['Title', 'Type', 'Rounds', '']}
                // footer={<Pagination links={exerciseTypes.meta.links} />}
            >
                {workout.sets.map((set, key) => <SetRow key={key} set={set} setEditCallback={setEditCallback} setDeleteCallback={setDeleteCallback} exerciseCreateCallback={exerciseCreateCallback}/>)}
            </Datatable>

            <CreateSet workout={workout} types={setTypes.data} isOpen={createSet} setIsOpen={setCreateSet} />
            <EditSet set={set} types={setTypes.data} isOpen={editSet} setIsOpen={setEditSet} />

            <CreateExercise set={set} isOpen={createExercise} setIsOpen={setCreateExercise} />
        </>
    );
};

export default Show;

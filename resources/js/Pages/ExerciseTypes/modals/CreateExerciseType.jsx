import React from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "@/Shared/Components/Modal";
import ExerciseTypeForm from "../components/ExerciseTypeForm";

const CreateExerciseType = ({isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing} = useForm({
        name: '',
        url: '',
        per_side: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercise-types.store'), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <ExerciseTypeForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                handleSubmit={handleSubmit}
                setIsOpen={setIsOpen}
            />
        </Modal>
    );
};

export default CreateExerciseType;

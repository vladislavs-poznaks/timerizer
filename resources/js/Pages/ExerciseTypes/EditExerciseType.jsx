import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "../../Shared/Components/Modal";
import { toast } from 'react-toastify';
import ExerciseTypeForm from "./ExerciseTypeForm";

const EditExerciseType = ({isOpen, setIsOpen, exerciseType}) => {
    const {data, setData, errors, put, processing, wasSuccessful, reset} = useForm({
        name: exerciseType ? exerciseType.name : '',
        url: exerciseType ? exerciseType.url : '',
        per_side: exerciseType ? exerciseType.per_side : true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('exercise-types.update', exerciseType.id), data)
    }

    useEffect(() => setData({...data, ...exerciseType}), [exerciseType])

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Exercise updated!")
        }
    }, [wasSuccessful])

    return (
        <Modal title="Edit an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
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

export default EditExerciseType;

import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "../../../Shared/Components/Modal";
import { toast } from 'react-toastify';
import WorkoutForm from "../components/WorkoutForm";

const EditWorkout = ({isOpen, setIsOpen, workout}) => {

    console.log("Workout", workout)

    const {data, setData, errors, put, processing, wasSuccessful, reset} = useForm({
        title: workout ? workout.title : '',
        description: workout ? workout.description : '',
        public: workout ? workout.public : true,
    })

    console.log("Data", data)

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('workouts.update', workout.id), data)
    }

    useEffect(() => setData({...data, ...workout}), [workout])

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Workout updated!")
        }
    }, [wasSuccessful])

    return (
        <Modal title="Edit a workout" isOpen={isOpen} setIsOpen={setIsOpen}>
            <WorkoutForm
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

export default EditWorkout;

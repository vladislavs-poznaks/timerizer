import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import TextInput from "../../../Shared/Components/TextInput";
import PrimaryButton from "../../../Shared/Components/PrimaryButton";
import TextArea from "../../../Shared/Components/TextArea";
import SecondaryButton from "../../../Shared/Components/SecondaryButton";
import Modal from "../../../Shared/Components/Modal";
import CheckBoxInput from "../../../Shared/Components/CheckBoxInput";
import { toast } from 'react-toastify';
import WorkoutForm from "../components/WorkoutForm";

const CreateWorkout = ({isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        title: '',
        description: '',
        public: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('workouts.store'), data)
    }

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Workout created!")
        }
    }, [wasSuccessful])

    return (
        <Modal title="Create a workout" isOpen={isOpen} setIsOpen={setIsOpen}>
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

export default CreateWorkout;

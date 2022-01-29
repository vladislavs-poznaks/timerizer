import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "@/Shared/Components/Modal";
import {toast} from "react-toastify";
import SetForm from "../components/SetForm";

const CreateSet = ({workout, types, isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        title: '',
        type: types[0].value,
        description: '',
        total_seconds: '',
        work_seconds: '',
        rest_seconds: '',
        rounds: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('sets.store', workout.id), data)
    }

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Set created!")
        }
    }, [wasSuccessful])

    return (
        <Modal title="Add a set" isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-lg">
            <SetForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                setIsOpen={setIsOpen}
                handleSubmit={handleSubmit}

                types={types}
            />
        </Modal>
    );
};

export default CreateSet;

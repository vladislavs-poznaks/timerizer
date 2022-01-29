import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "@/Shared/Components/Modal";
import {toast} from "react-toastify";
import SetForm from "../components/SetForm";

const EditSet = ({isOpen, setIsOpen, set, types}) => {
    const {data, setData, errors, put, processing, wasSuccessful, reset} = useForm({
        title: set ? set.title : '',
        type: set ? types.find(it => it.value === set.type) : types[0].value,
        description: set && set.description ? set.description : '',
        total_seconds: set && set.total_seconds ? set.total_seconds : '',
        work_seconds: set && set.work_seconds ? set.work_seconds : '',
        rest_seconds: set && set.rest_seconds ? set.rest_seconds : '',
        rounds: set && set.rounds ? set.rounds : '',
    })

    for (const [key, value] of Object.entries(data)) {
        if (value === null) {
            setData(key, '')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('sets.update', set.id), data)
    }

    useEffect(() => setData({...data, ...set}), [set])

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Set updated!")
        }
    }, [wasSuccessful])

    return (
        <Modal title="Edit set" isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-lg">
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

export default EditSet;

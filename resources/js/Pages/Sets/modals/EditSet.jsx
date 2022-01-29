import React, {useEffect, useState} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import Modal from "@/Shared/Components/Modal";
import {toast} from "react-toastify";
import SetForm from "../components/SetForm";

const EditSet = ({isOpen, setIsOpen, set, types}) => {
    const {data, setData, errors, put, processing, wasSuccessful, reset} = useForm({
        title: set ? set.title : '',
        type: set ? types.find(it => it.value === set.type) : types[0].value,
        description: set ? set.description : '',
        total_seconds: set ? set.total_seconds : '',
        work_seconds: set ? set.work_seconds : '',
        rest_seconds: set ? set.rest_seconds : '',
        rounds: set ? set.rounds : '',
    })

    const [selectedType, setSelectedType] = useState(types.find(it => it.value === data.type))

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('sets.update', set.id), data)
    }

    useEffect(() => setData({...data, ...set}), [set])

    useEffect(() => {
        if (data.type) {
            setSelectedType(types.find(it => it.value === data.type))
        }
    }, [data.type])

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

                selectedType={selectedType}
                types={types}
            />
        </Modal>
    );
};

export default EditSet;

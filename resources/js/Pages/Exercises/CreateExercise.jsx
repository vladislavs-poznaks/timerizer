import React, {useEffect, useRef, useState} from 'react'
import {useForm, usePage} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";
import {Inertia} from "@inertiajs/inertia";

const CreateExercise = ({set, isOpen, setIsOpen}) => {
    const {workout, filters, exerciseTypes} = usePage().props

    const [params, setParams] = useState({
        type: filters.type || ''
    })

    const [timeBased, setTimeBased] = useState(false)

    const {data, setData, errors, post, processing} = useForm({
        exercise_type_id: '',
        repetitions: '',
        seconds: '',
    })

    function usePrevious(value) {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }

    const prevParams = usePrevious(params);

    useEffect(() => {
        if (prevParams) {
            Inertia.get(route(route().current(), workout.id), params, {
                replace: true,
                preserveState: true
            });
        }
    }, [params])

    useEffect(() => {
        timeBased ? setData({...data, repetitions: ''}) : setData({...data, seconds: ''})
    }, [timeBased])

    const handleParamsChange = (e) => {
        setParams({
            ...params,
            [e.target.name]: e.target.value
        })
    }

    const handleSelectExerciseType = (e) => {
        console.log(e.target.innerText)
        setParams({
            ...params,
            [e.target.name]: e.target.innerText
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercises.store', set.id), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="flex flex-col">
                    <TextInput
                        name="type"
                        label="Exercise type"
                        autoComplete="off"
                        placeholder="Search for an exercise..."
                        value={params.type}
                        onChange={handleParamsChange}
                    />
                </div>

                {params.type.length > 2 && <div>
                    {exerciseTypes.map((exerciseType, key) => {
                        return (
                            <button key={key} type="button" onClick={handleSelectExerciseType} name="type">{exerciseType.name}</button>
                        )
                    })}
                </div>}

                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                        checked={timeBased}
                        onChange={() => setTimeBased(!timeBased)}
                    />
                    <span
                        className="inline-flex text-xs text-gray-500 sm:text-sm dark:text-gray-100">For time</span>
                </label>

                {!timeBased && <div className="flex flex-col">
                    <TextInput
                        name="repetitions"
                        type="number"
                        min="0"
                        label="Repetitions"
                        autoComplete="off"
                        placeholder="Lifting up & down"
                        errors={errors.repetitions}
                        value={data.repetitions}
                        onChange={e => setData('repetitions', e.target.value)}
                    />
                </div>}

                {timeBased && <div className="flex flex-col">
                    <TextInput
                        name="seconds"
                        type="number"
                        min="0"
                        label="Seconds"
                        autoComplete="off"
                        placeholder="Lifting up & down"
                        errors={errors.seconds}
                        value={data.seconds}
                        onChange={e => setData('seconds', e.target.value)}
                    />
                </div>}

                <div className="flex justify-between items-center space-x-4">
                    <PrimaryButton type="submit" loading={processing}>Save</PrimaryButton>
                    <SecondaryButton type="button" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateExercise;

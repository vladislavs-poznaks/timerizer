import React, {useEffect, useState} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import TextInput from "@/Shared/Components/TextInput";
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import SecondaryButton from "@/Shared/Components/SecondaryButton";
import Modal from "@/Shared/Components/Modal";
import axios from "axios";
import {toast} from "react-toastify";
import {debounce} from "lodash";
import AsyncSelect from "react-select/async";

const CreateExercise = ({set, isOpen, setIsOpen}) => {
    const [params, setParams] = useState({
        name: ''
    })

    const [timeBased, setTimeBased] = useState(false)

    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        exercise_type_id: '',
        repetitions: '',
        seconds: '',
    })

    const loadOptions = (search, callback) => {
        axios
            .get(route('exercise-types.api', {name: search}))
            .then((res) => {
                const options = res.data.data.map(it => {
                    return {
                        value: it.id,
                        label: it.name
                    }
                })

                callback(options)
            })
    }

    useEffect(() => {
        timeBased ? setData({...data, repetitions: ''}) : setData({...data, seconds: ''})
    }, [timeBased])

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...Object.keys(data))

            toast.success("Exercise created!")
        }
    }, [wasSuccessful])

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercises.store', set.id), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>

                <AsyncSelect
                    defaultOptions
                    loadOptions={debounce(loadOptions, 300)}
                    onChange={({value}) => setData('exercise_type_id', value)}
                />

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
                        placeholder="30"
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
                        placeholder="120"
                        errors={errors.seconds}
                        value={data.seconds}
                        onChange={e => setData('seconds', e.target.value)}
                    />
                </div>}

                <div className="flex justify-between items-center space-x-4">
                    <PrimaryButton className="w-full" type="submit" loading={processing}>Save</PrimaryButton>
                    <SecondaryButton className="w-full" type="button"
                                     onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateExercise;

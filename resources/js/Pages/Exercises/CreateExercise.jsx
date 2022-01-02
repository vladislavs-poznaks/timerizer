import React, {useEffect, useState} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";
import {useQuery, useQueryClient} from "react-query";
import axios from "axios";
import CreateExerciseTypeWrapped from "../ExerciseTypes/CreateExerciseTypeWrapped";
import {toast} from "react-toastify";
import {debounce} from "lodash";

const CreateExercise = ({set, isOpen, setIsOpen, setCreateExerciseType}) => {
    const [showTypes, setShowTypes] = useState(false)

    const [params, setParams] = useState({
        name: ''
    })

    const [timeBased, setTimeBased] = useState(false)

    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        exercise_type_id: '',
        repetitions: '',
        seconds: '',
    })


    const {isLoading, isSuccess, data: exerciseTypes} = useQuery([params], () => {
        return axios.get(route('exercise-types.api', params))
    }, {
        select: (data) => data.data
    })

    useEffect(() => {
        setShowTypes(showExerciseTypes())

        if (exerciseTypeSelected()) {
            setData('exercise_type_id', exerciseTypes.data.find(it => it.name === params.name).id)
        }
    }, [exerciseTypes])

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

    const showExerciseTypes = () => {
        if (exerciseTypes === undefined) {
            return false
        }

        if (params.name.length < 3) {
            return false
        }

        return ! exerciseTypeSelected()
    }

    const exerciseTypeSelected = () => {
        if (exerciseTypes === undefined) {
            return false
        }

        return exerciseTypes.data.some(it => it.name === params.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercises.store', set.id), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="w-full max-w-lg relative">
                    <TextInput
                        label="Exercise type"
                        placeholder="Search for exercise..."
                        autoComplete="off"
                        onChange={e => setParams({...params, name: e.target.value})}
                        value={params.name}
                    />
                    {showTypes && <div
                        className="z-50 w-full absolute mt-3 shadow-lg rounded-lg bg-white"
                    >
                        <ul>
                            {exerciseTypes && exerciseTypes.data.map(type => {
                                return (
                                    <li key={type.id}>
                                        <button
                                            type="button"
                                            className="flex justify-between items-center px-3 py-3 space-x-2"
                                            onClick={() => setParams({...params, name: type.name})}
                                        >
                                            <div>{type.name}</div>
                                            {type.per_side && <div
                                                className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-purple-500 bg-purple-100">Per side</div>}
                                        </button>
                                    </li>
                                )
                            })}
                            <li key="add_new_exercise_type" className="px-3 py-3">
                                <CreateExerciseTypeWrapped name={params.name} params={params} setParams={setParams} success={() => showExerciseTypes()}/>
                            </li>
                        </ul>
                    </div>}
                </div>


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

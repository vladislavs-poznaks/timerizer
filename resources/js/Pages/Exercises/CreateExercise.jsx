import React, {Fragment, useEffect, useRef, useState} from 'react'
import {useForm, usePage} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";
import {Inertia} from "@inertiajs/inertia";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/outline";

const CreateExercise = ({set, isOpen, setIsOpen, setCreateExerciseType}) => {
    const {workout, filters, exerciseTypes} = usePage().props

    const [selectedExerciseType, setSelectedExerciseType] = useState(exerciseTypes[0])

    const [params, setParams] = useState({
        type: filters.type || ''
    })

    const [timeBased, setTimeBased] = useState(false)

    const {data, setData, errors, post, processing} = useForm({
        exercise_type_id: exerciseTypes[0].value,
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

    useEffect(() => {
        setData('exercise_type_id', selectedExerciseType.id)
    }, [selectedExerciseType])

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercises.store', set.id), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex justify justify-between items-center space-x-2">
                    <div className="w-5/6 relative">
                        <Listbox value={selectedExerciseType} onChange={setSelectedExerciseType}>
                            {({open}) => (
                                <>
                                    <Listbox.Button
                                        className="rounded-lg flex justify-between items-center appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gray-300"
                                    >
                                        <div>{selectedExerciseType.name}</div>
                                        {open ? <ChevronUpIcon className="h-5 w-5"/> : <ChevronDownIcon className="h-5 w-5"/>}
                                    </Listbox.Button>

                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-30 w-full flex flex-col space-y-1 py-2 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {exerciseTypes.map((exerciseType) => (
                                                <Listbox.Option
                                                    className={({ active }) =>
                                                        `flex space-x-4 items-center cursor-default select-none relative py-2 px-4 ${active ? 'text-purple-900 bg-purple-100' : 'text-gray-900'}`
                                                    }
                                                    key={exerciseType.id}
                                                    value={exerciseType}
                                                >
                                                    {({active, selected}) => (
                                                        <>
                                                            <span className={`${selected && 'font-semibold text-purple-600'} ${active && 'text-purple-600'}`}>{exerciseType.name}</span>
                                                            {selected && <CheckIcon className="text-purple-600 h-5 w-5" />}
                                                        </>
                                                    )}

                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </>
                            )}
                        </Listbox>
                    </div>

                    <div className="w-1/6">
                        <PrimaryButton type="button" onClick={() => setCreateExerciseType(true)}>Add</PrimaryButton>
                    </div>

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
                    <SecondaryButton className="w-full" type="button" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateExercise;

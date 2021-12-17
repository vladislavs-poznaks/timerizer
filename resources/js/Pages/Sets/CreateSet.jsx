import React, {useEffect, useState} from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import {RadioGroup} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/solid";
import {hasRestTime, hasWorkTime, isCountBased, isTimeBased} from "../../utils";
import TextArea from "../../Shared/Components/TextArea";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";

const CreateSet = ({workout, types, isOpen, setIsOpen}) => {
    const [selectedType, setSelectedType] = useState(types[0])

    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        title: '',
        type: '',
        description: '',
        total_seconds: '',
        work_seconds: '',
        rest_seconds: '',
        rounds: '',
    })

    const handleCreate = (e) => {
        e.preventDefault()
        post(route('sets.store', workout.id), data)
    }

    useEffect(() => {
        setData({
            ...data,
            type: selectedType.value,
        })

        console.log(data)
        console.log(selectedType)
    }, [selectedType])

    // useEffect(() => {
    //     if (wasSuccessful) {
    //         setIsOpen(false)
    //         reset(...data)
    //     }
    //
    //     setSelectedType(types.find(type => type.value === data.type) || types[0])
    // }, [wasSuccessful])

    return (
        <Modal title="Add a set" isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-lg">
            <form className="space-y-4" onSubmit={handleCreate}>
                <TextInput
                    name="title"
                    label="Set title"
                    autoComplete="off"
                    placeholder="All work, no rest 🥵"
                    errors={errors.title}
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                />

                <div>
                    <div className="w-full max-w-md mx-auto">
                        <RadioGroup value={selectedType} onChange={setSelectedType}>
                            <div className="space-y-2">
                                {types.map((type) => (
                                    <RadioGroup.Option
                                        key={type.value}
                                        value={type}
                                        className={({checked}) =>
                                            `${checked ? 'ring-2 ring-offset-2 ring-offset-500 ring-offset-purple-200 ring-white ring-opacity-60 bg-purple-700 bg-opacity-75 text-white' : 'bg-white'}
                                                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                        }
                                    >
                                        {({active, checked}) => (
                                            <>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center">
                                                        <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                                            >
                                                                {type.text}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                                                            >
                                                                <span className="text-xs">{type.description}</span>
                                                            </RadioGroup.Description>
                                                        </div>
                                                    </div>
                                                    {checked && (
                                                        <div className="flex-shrink-0 text-white">
                                                            <CheckIcon className="w-6 h-6"/>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                {isCountBased(selectedType) && <TextInput
                    name="rounds"
                    type="number"
                    min="0"
                    label="Set rounds"
                    autoComplete="off"
                    placeholder="100x"
                    errors={errors.rounds}
                    value={data.rounds}
                    onChange={e => setData('rounds', e.target.value)}
                />}

                {isTimeBased(selectedType) && <TextInput
                    name="total_seconds"
                    type="number"
                    min="0"
                    label="Set total time"
                    autoComplete="off"
                    placeholder="99 seconds, but the last ain't one"
                    errors={errors.total_seconds}
                    value={data.total_seconds}
                    onChange={e => setData('total_seconds', e.target.value)}
                />}

                {hasWorkTime(selectedType) && <TextInput
                    name="work_seconds"
                    type="number"
                    min="0"
                    label="Set work time"
                    autoComplete="off"
                    placeholder="Much seconds"
                    errors={errors.work_seconds}
                    value={data.work_seconds}
                    onChange={e => setData('work_seconds', e.target.value)}
                />}

                {hasRestTime(selectedType) && <TextInput
                    name="rest_seconds"
                    type="number"
                    min="0"
                    label="Set rest time"
                    autoComplete="off"
                    placeholder="Srsly? 😅"
                    errors={errors.rest_seconds}
                    value={data.rest_seconds}
                    onChange={e => setData('rest_seconds', e.target.value)}
                />}

                <TextArea
                    className="h-24"
                    name="description"
                    label="Workout description"
                    autoComplete="off"
                    placeholder="Some description (optional)"
                    errors={errors.description}
                    defaultValue={data.description}
                    onChange={e => setData('description', e.target.value)}
                />

                <div className="flex justify-between items-center space-x-4">
                    <PrimaryButton type="submit" className="w-full" loading={processing}>Save</PrimaryButton>
                    <SecondaryButton type="button" className="w-full" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateSet;

import React, {useEffect, useState} from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import Modal from "../../Shared/Components/Modal";
import TextInput from "../../Shared/Components/TextInput";
import TextArea from "../../Shared/Components/TextArea";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import {RadioGroup} from '@headlessui/react';

const Show = ({workout, setTypes}) => {
    const [selectedType, setSelectedType] = useState(setTypes.data[0])

    const {data, setData, errors, post, processing} = useForm({
        seconds: null,
        count: null,
    })

    useEffect(() => {
        setData('type', selectedType.value)
    }, [selectedType])

    console.log(data.type)

    const handleCreate = (e) => {
        e.preventDefault()
        post(route('workouts.sets.store', workout.id), data)
    }

    const [createSet, setCreateSet] = useState(false)


    return (
        <>
            <Head title={workout.title}/>
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-2">
                <div className="flex items-center justify-between items-center">
                    <div>{workout.title}</div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                    >
                        {workout.public ? 'Public' : 'Private'}
                    </div>
                </div>
                <div>
                    {workout.description}
                </div>
                <PrimaryButton type="button" onClick={() => setCreateSet(true)}>Add set</PrimaryButton>
            </div>

            <Modal title="Add a set" open={createSet} setOpen={setCreateSet}>
                <form className="space-y-4" onSubmit={handleCreate}>

                    <div className="">
                        <div className="w-full max-w-md mx-auto">
                            <RadioGroup value={selectedType} onChange={setSelectedType}>
                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                <div className="space-y-2">
                                    {setTypes.data.map((type) => (
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
                                                                    <span>Description</span>{' '}
                                                                    <span aria-hidden="true">&middot;</span>{' '}
                                                                    <span>Description 2</span>
                                                                </RadioGroup.Description>
                                                            </div>
                                                        </div>
                                                        {checked && (
                                                            <div className="flex-shrink-0 text-white">
                                                                {/*<CheckIcon className="w-6 h-6"/>*/}
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

                        <TextInput
                            name="title"
                            label="Workout title"
                            autoComplete="off"
                            placeholder="Butt Buster 3000 🚀"
                            errors={errors.type}
                            value={data.type}
                            onChange={e => setData('type', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <TextArea
                            className="h-48"
                            name="description"
                            label="Workout description"
                            autoComplete="off"
                            placeholder="This will make you sweat like the time you told you are going for a sleepover... But really really went to party instead"
                            errors={errors.type}
                            defaultValue={data.type}
                            onChange={e => setData('type', e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center space-x-4">
                        <PrimaryButton type="submit" loading={processing}>Save</PrimaryButton>
                        <SecondaryButton type="button" onClick={() => setCreateSet(false)}>Cancel</SecondaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Show;

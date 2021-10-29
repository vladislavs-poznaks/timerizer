import React, {useState} from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import TextInput from "../../Shared/Components/TextInput";
import TextArea from "../../Shared/Components/TextArea";
import WorkoutCard from "./WorkoutCard";
import Modal from "../../Shared/Components/Modal";
import SecondaryButton from "../../Shared/Components/SecondaryButton";

const Index = ({workouts}) => {
    const {data, setData, errors, post, processing} = useForm({
        title: '',
        description: '',
        public: true,
    })

    const handleCreate = (e) => {
        e.preventDefault()
        post(route('workouts.store'), data)
    }

    let [open, setOpen] = useState(false)

    return (
        <>
            <Head title="My workouts"/>

            <div className="w-full space-y-4">
                <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                    <div className="flex items-center justify-end">
                        <div>
                            <PrimaryButton onClick={() => setOpen(true)}>Create a workout</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {workouts.data.length && workouts.data.map((workout, key) => <WorkoutCard workout={workout}
                                                                                              key={key}/>)}
                </div>
            </div>

            <Modal title="Create a workout" open={open} setOpen={setOpen}>
                <form className="space-y-4" onSubmit={handleCreate}>
                    <div className="flex flex-col">
                        <TextInput
                            name="title"
                            label="Workout title"
                            autoComplete="off"
                            placeholder="Butt Buster 3000 🚀"
                            errors={errors.title}
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <TextArea
                            className="h-48"
                            name="description"
                            label="Workout description"
                            autoComplete="off"
                            placeholder="This will make you sweat like the time you told you are going for a sleepover... But really really went to party instead"
                            errors={errors.description}
                            defaultValue={data.description}
                            onChange={e => setData('description', e.target.value)}
                        />
                    </div>
                    <label className="flex items-center space-x-3">
                        <input
                            id="public"
                            type="checkbox"
                            className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                            checked={data.public}
                            onChange={e => setData('public', e.target.checked)}
                        />
                        <span
                            className="inline-flex text-xs text-gray-500 sm:text-sm dark:text-gray-100">Public</span>
                    </label>
                    <div className="flex justify-between items-center space-x-4">
                        <PrimaryButton type="submit" loading={processing}>Save</PrimaryButton>
                        <SecondaryButton type="button" onClick={() => setOpen(false)}>Cancel</SecondaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Index;

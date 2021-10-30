import React from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import TextArea from "../../Shared/Components/TextArea";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";

const CreateWorkout = ({isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing} = useForm({
        title: '',
        description: '',
        public: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('workouts.store'), data)
    }

    return (
        <Modal title="Create a workout" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                    <SecondaryButton type="button" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateWorkout;

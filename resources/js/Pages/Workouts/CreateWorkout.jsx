import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import TextArea from "../../Shared/Components/TextArea";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";
import CheckBoxInput from "../../Shared/Components/CheckBoxInput";

const CreateWorkout = ({isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing, wasSuccessful, reset} = useForm({
        title: '',
        description: '',
        public: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('workouts.store'), data)
    }

    useEffect(() => {
        if (wasSuccessful) {
            setIsOpen(false)
            reset(...data)
        }
    }, [wasSuccessful])

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
                <CheckBoxInput label="Public" name="public" checked={data.public} onChange={e => setData('public', e.target.checked)}/>
                <div className="flex justify-between items-center space-x-4">
                    <PrimaryButton type="submit" className="w-full" loading={processing}>Save</PrimaryButton>
                    <SecondaryButton type="button" className="w-full" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateWorkout;

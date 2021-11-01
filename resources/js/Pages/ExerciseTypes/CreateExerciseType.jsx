import React from 'react'
import {useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Modal from "../../Shared/Components/Modal";

const CreateExerciseType = ({isOpen, setIsOpen}) => {
    const {data, setData, errors, post, processing} = useForm({
        name: '',
        per_side: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercise-types.store'), data)
    }

    return (
        <Modal title="Create an exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <TextInput
                        name="name"
                        label="Exercise name"
                        autoComplete="off"
                        placeholder="Lifting up & down"
                        errors={errors.name}
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                </div>

                <label className="flex items-center space-x-3">
                    <input
                        id="per_side"
                        type="checkbox"
                        className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                        checked={data.per_side}
                        onChange={e => setData('per_side', e.target.checked)}
                    />
                    <span
                        className="inline-flex text-xs text-gray-500 sm:text-sm dark:text-gray-100">Per each side</span>
                </label>

                <div className="flex justify-between items-center space-x-4">
                    <PrimaryButton type="submit" loading={processing}>Save</PrimaryButton>
                    <SecondaryButton type="button" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateExerciseType;

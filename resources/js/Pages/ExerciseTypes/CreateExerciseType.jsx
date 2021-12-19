import React, {useEffect} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";

const CreateExerciseType = ({name}) => {
    const {data, setData, errors, post, processing} = useForm({
        name: '',
        per_side: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('exercise-types.store'), data)
    }

    useEffect(() => {
        setData('name', name)
    }, [name])

    return (
        <div className="flex justify-between items-center space-x-2">
            <div>{name}</div>
            {/*<form className="flex justify-between items-center space-x-2" onSubmit={handleSubmit}>*/}
            <label className="flex items-center space-x-3">
                <input
                    id="per_side"
                    type="checkbox"
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                    checked={data.per_side}
                    onChange={e => setData('per_side', e.target.checked)}
                />
                <span
                    className="inline-flex text-xs text-gray-500 sm:text-sm dark:text-gray-100"
                >Per each side</span>
            </label>

            <div className="flex justify-between items-center space-x-4">
                <PrimaryButton type="button" onClick={(e) => handleSubmit(e)} loading={processing}>Add</PrimaryButton>
            </div>
        </div>

    );
};

export default CreateExerciseType;

import React from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import TextInput from "../../Shared/Components/TextInput";
import PrimaryButton from "../../Shared/Components/PrimaryButton";

const Create = () => {
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
        <>
            <Head title="New workout" />
            <form className="space-y-4" onSubmit={handleSubmit}>
                <TextInput
                    label="Title"
                    name="title"
                    type="title"
                    autoComplete="off"
                    errors={errors.title}
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                />
                <div className="space-y-1">
                    <label className="form-label" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="block w-full border rounded-lg py-3 px-3 bg-gray-900 border-gray-700 placeholder-white-500 text-white focus:border-red-500 focus:outline-red-500"
                        onChange={e => setData('description', e.target.value)}
                        defaultValue={data.description}
                    />
                    {errors.description && <div className="text-xs text-red-600">{errors.description}</div>}
                </div>
                <div className="flex items-center justify-between mt-4">
                    <label htmlFor="public" className="inline-flex items-center">
                        <input
                            id="public"
                            className="rounded focus:outline-none focus:shadow-outline"
                            checked={data.public}
                            onChange={e => setData('public', e.target.checked)}
                            type="checkbox"
                        />
                        <span className="ml-2 text-sm text-white">Public</span>
                    </label>
                </div>
                <PrimaryButton type="submit" loading={processing}>
                    Submit
                </PrimaryButton>
            </form>
        </>
    );
};

export default Create;

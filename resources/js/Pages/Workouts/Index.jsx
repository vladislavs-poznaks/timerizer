import React, {useState} from 'react'
import {Head, useForm} from '@inertiajs/inertia-react'
import Button from "../../Shared/Components/Button";
import {Dialog} from '@headlessui/react'
import TextInput from "../../Shared/Components/TextInput";

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

            <div className="w-full">
                <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                    <div className="flex items-center justify-end">
                        <div>
                            <Button onClick={() => setOpen(true)}>Create a workout</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <div
                            className="inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-4"
                        >
                            <Dialog.Title>Create a workout</Dialog.Title>

                            <form className="space-y-4" onSubmit={handleCreate}>
                                <div className="flex flex-col">
                                    <TextInput
                                        name="title"
                                        label="Workout title"
                                        autoComplete="off"
                                        placeholder="Butt Buster 3000"
                                        errors={errors.title}
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col h-48 space-y-1">
                                    <label className="form-label inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        autoComplete="off"
                                        placeholder="This will make you sweat like the time you told you are going for a sleepover... But really really went to party instead"
                                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.description && 'ring-2 ring-red-600'}`}
                                        onChange={e => setData('description', e.target.value)}
                                        defaultValue={data.description}
                                    />
                                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
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
                                <Button type="submit" loading={processing}>Save</Button>
                            </form>

                            {/*<button onClick={() => setOpen(false)}>Cancel</button>*/}
                        </div>

                    </div>
                </div>
            </Dialog>

        </>
    );
};

export default Index;

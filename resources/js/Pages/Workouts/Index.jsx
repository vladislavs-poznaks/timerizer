import React, {useState} from 'react'
import {Head, Link} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import WorkoutCard from "./WorkoutCard";
import CreateWorkout from "./CreateWorkout";
import {TrashIcon} from "@heroicons/react/solid";

const Index = ({workouts}) => {
    const [createWorkout, setCreateWorkout] = useState(false)

    return (
        <>
            <Head title="My workouts"/>

            <div className="w-full space-y-4">
                <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-8">
                    <div className="flex items-center justify-end">
                        <div>
                            <PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>
                        </div>
                    </div>

                    <table className="min-w-full leading-normal">
                        <thead>
                        <tr>
                            <th scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Title
                            </th>
                            <th scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Description
                            </th>
                            <th scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Status
                            </th>
                            <th scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {workouts.data.length ? workouts.data.map((workout, key) => {
                            return (
                                <tr key={key}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <Link href={route('workouts.show', {workout: workout.id})}>
                                                <p className="text-gray-900 whitespace-no-wrap">

                                                    {workout.title}
                                                </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {workout.description}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden="true"
                                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                            </span>
                                            <span className="relative">
                                                {workout.public ? 'Public' : 'Private'}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <TrashIcon className="w-5 h-5"/>
                                    </td>
                                </tr>
                            )
                        }) : 'No workouts yet'}
                        </tbody>
                    </table>
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="space-y-4">*/}
                    {/*    {workouts.data.length*/}
                    {/*        ? workouts.data.map((workout, key) => <WorkoutCard workout={workout} key={key}/>)*/}
                    {/*        : 'No workouts yet'*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
            </div>

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout}/>
        </>
    );
};

export default Index;

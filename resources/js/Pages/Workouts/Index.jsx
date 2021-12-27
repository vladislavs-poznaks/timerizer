import React, {useState} from 'react'
import {Head, Link} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import WorkoutCard from "./WorkoutCard";
import CreateWorkout from "./CreateWorkout";
import {TrashIcon} from "@heroicons/react/solid";
import WorkoutRow from "./WorkoutRow";

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
                        {workouts.data.length ? workouts.data.map((workout, key) => <WorkoutRow key={key} workout={workout} />) : 'No workouts yet'}
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

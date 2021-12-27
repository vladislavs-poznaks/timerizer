import React, {useState} from 'react'
import {Head, Link} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import WorkoutCard from "./WorkoutCard";
import CreateWorkout from "./CreateWorkout";
import {TrashIcon} from "@heroicons/react/solid";
import WorkoutRow from "./WorkoutRow";
import Datatable from "../../Shared/Components/Datatable";

const Index = ({workouts}) => {
    const [createWorkout, setCreateWorkout] = useState(false)

    return (
        <>
            <Head title="My workouts"/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>}
                columns={['Title', 'Description', 'Status', 'Actions']}
            >

                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                    Jane Cooper
                                </div>
                                <div className="text-sm text-gray-500">
                                    jane.cooper@example.com
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
            </Datatable>

            {/*<div className="w-full bg-white rounded-2xl">*/}
            {/*    <div className="align-middle inline-block min-w-full">*/}
            {/*        <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-xl">*/}
            {/*            <div className="p-4 flex items-center justify-end border-b border-gray-200">*/}
            {/*                <PrimaryButton onClick={() => setCreateWorkout(true)}>Create a workout</PrimaryButton>*/}
            {/*            </div>*/}
            {/*            <table className="min-w-full divide-y divide-gray-200">*/}
            {/*                <thead className="bg-gray-50">*/}
            {/*                <tr>*/}
            {/*                    <th scope="col"*/}
            {/*                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        Name*/}
            {/*                    </th>*/}
            {/*                    <th scope="col"*/}
            {/*                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        Title*/}
            {/*                    </th>*/}
            {/*                    <th scope="col"*/}
            {/*                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        Status*/}
            {/*                    </th>*/}
            {/*                    <th scope="col"*/}
            {/*                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">*/}
            {/*                        Role*/}
            {/*                    </th>*/}
            {/*                    <th scope="col" className="relative px-6 py-3">*/}
            {/*                        <span className="sr-only">Edit</span>*/}
            {/*                    </th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody className="bg-white divide-y divide-gray-200">*/}
            {/*                <tr>*/}
            {/*                    <td className="px-6 py-4 whitespace-nowrap">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <div className="ml-4">*/}
            {/*                                <div className="text-sm font-medium text-gray-900">*/}
            {/*                                    Jane Cooper*/}
            {/*                                </div>*/}
            {/*                                <div className="text-sm text-gray-500">*/}
            {/*                                    jane.cooper@example.com*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </td>*/}
            {/*                    <td className="px-6 py-4 whitespace-nowrap">*/}
            {/*                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>*/}
            {/*                        <div className="text-sm text-gray-500">Optimization</div>*/}
            {/*                    </td>*/}
            {/*                    <td className="px-6 py-4 whitespace-nowrap">*/}
            {/*    <span*/}
            {/*        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">*/}
            {/*      Active*/}
            {/*    </span>*/}
            {/*                    </td>*/}
            {/*                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">*/}
            {/*                        Admin*/}
            {/*                    </td>*/}
            {/*                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">*/}
            {/*                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>*/}
            {/*                    </td>*/}
            {/*                </tr>*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<table className="min-w-full leading-normal">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col"*/}
            {/*            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">*/}
            {/*            Title*/}
            {/*        </th>*/}
            {/*        <th scope="col"*/}
            {/*            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">*/}
            {/*            Description*/}
            {/*        </th>*/}
            {/*        <th scope="col"*/}
            {/*            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">*/}
            {/*            Status*/}
            {/*        </th>*/}
            {/*        <th scope="col"*/}
            {/*            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">*/}
            {/*            Actions*/}
            {/*        </th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {workouts.data.length ? workouts.data.map((workout, key) => <WorkoutRow key={key}*/}
            {/*                                                                            workout={workout}/>) : 'No workouts yet'}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*</div>*/}

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout}/>
        </>
    )
        ;
};

export default Index;

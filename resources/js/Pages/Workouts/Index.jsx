import React, {useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import WorkoutCard from "./WorkoutCard";
import CreateWorkout from "./CreateWorkout";

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

                    <div className="space-y-4">
                        {workouts.data.length
                            ? workouts.data.map((workout, key) => <WorkoutCard workout={workout} key={key}/>)
                            : 'No workouts yet'
                        }
                    </div>
                </div>
            </div>

            <CreateWorkout isOpen={createWorkout} setIsOpen={setCreateWorkout} />
        </>
    );
};

export default Index;

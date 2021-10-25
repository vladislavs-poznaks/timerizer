import React from 'react'
import { Head } from '@inertiajs/inertia-react'

const Index = ({workouts}) => {
    return (
        <>
            <Head title="My workouts" />
            <div>
                My workouts
            </div>
            <div>
                <ul>
                    {workouts.data.length ? workouts.data.map((workout, key) => {
                        return (
                            <li key={key}>{workout.title}</li>
                        )
                    }) : (<li>No workouts yet</li>)}
                </ul>
            </div>
        </>
    );
};

export default Index;

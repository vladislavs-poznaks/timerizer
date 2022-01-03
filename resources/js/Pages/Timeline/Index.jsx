import React from 'react'
import {Head, Link} from '@inertiajs/inertia-react'
import Badge from "../../Shared/Components/Badge";

const Index = ({workouts}) => {

    return (
        <>
            <Head title="Timeline"/>

            <div className="w-full bg-white rounded-2xl">
                <div className="align-middle inline-block min-w-full">
                    <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-xl">

                        {workouts && workouts.data.map((workout, key) => {
                            return (
                                <div key={key} className="px-4 py-2 flex flex-col space-y-2">
                                    <div className="flex justify-start space-x-2 items-center">
                                        <Link href={route('timeline.show', workout.id)}>
                                            {workout.title}
                                        </Link>
                                        <Badge color={workout.public ? 'green' : 'red'}>
                                            {workout.public ? 'Public' : 'Private'}
                                        </Badge>
                                    </div>
                                    <div className="text-sm">{workout.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;

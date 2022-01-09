import {Head} from '@inertiajs/inertia-react'
import SetCard from "@/Pages/Sets/components/SetCard";
import Badge from "../../Shared/Components/Badge";

const Show = ({workout}) => {
    return (
        <>
            <Head><title>{workout.title}</title></Head>
            <div className="shadow-lg rounded-xl px-10 py-4 bg-white dark:bg-gray-700 w-full space-y-2">
                <div className="flex items-center justify-between items-center">
                    <div className="font-bold text-gray-700">{workout.title}</div>
                    <Badge color={workout.public ? 'green' : 'red'}>
                        {workout.public ? 'Public' : 'Private'}
                    </Badge>
                </div>
                <div>
                    {workout.description}
                </div>
            </div>
            <div className="w-full space-y-4">
                {workout.sets.length && workout.sets.map((set, key) => (
                    <SetCard
                        key={key}
                        workout={workout}
                        set={set}
                    />
                ))}
            </div>
        </>
    );
};

export default Show;

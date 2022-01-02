import React, {useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";

import Datatable from "@/Shared/Components/Datatable";
import Pagination from "@/Shared/Components/Pagination";
import ExerciseTypeRow from "./ExerciseTypeRow";
import CreateExerciseType from "./CreateExerciseType";
import EditExerciseType from "./EditExerciseType";
import Modal from "../../Shared/Components/Modal";

const Index = ({exerciseTypes}) => {

    const [createExerciseType, setCreateExerciseType] = useState(false)
    const [editExerciseType, setEditExerciseType] = useState(false)

    const [showVideo, setShowVideo] = useState(false)

    const [exerciseType, setExerciseType] = useState()

    return (
        <>
            <Head title="My exercises"/>

            <Datatable
                header={<PrimaryButton onClick={() => setCreateExerciseType(true)}>Create an exercise</PrimaryButton>}
                columns={['Name', 'Url', '']}
                footer={<Pagination links={exerciseTypes.meta.links} />}
            >
                {exerciseTypes.data.map((exerciseType, key) => <ExerciseTypeRow key={key} exerciseType={exerciseType} setEditExerciseType={setEditExerciseType} setShowVideo={setShowVideo} setExerciseType={setExerciseType}/>)}
            </Datatable>

            <CreateExerciseType isOpen={createExerciseType} setIsOpen={setCreateExerciseType}/>
            <EditExerciseType isOpen={editExerciseType} setIsOpen={setEditExerciseType} exerciseType={exerciseType}/>

            <Modal isOpen={showVideo} setIsOpen={setShowVideo}>
                {exerciseType && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${exerciseType.url}}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>}
            </Modal>}
        </>
    )
        ;
};

export default Index;

import React, {useEffect, useState} from 'react'
import TextInput from "@/Shared/Components/TextInput";
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import TextArea from "@/Shared/Components/TextArea";
import SecondaryButton from "@/Shared/Components/SecondaryButton";
import {getModifiedReactSelectTheme, hasRestTime, hasWorkTime, isCountBased, isTimeBased} from "../../../utils";
import Select from "react-select";

const SetForm = ({data, setData, errors, processing, setIsOpen, handleSubmit, types}) => {
    const options = types.map(type => {
        return {...type, label: type.text}
    })

    const [selectedType, setSelectedType] = useState(options.find(option => option.value === data.type))

    useEffect(() => {
        setData('type', selectedType.value)
    }, [selectedType])

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <TextInput
                name="title"
                label="Set title"
                autoComplete="off"
                placeholder="All work, no rest 🥵"
                errors={errors.title}
                value={data.title}
                onChange={e => setData('title', e.target.value)}
            />

            <Select
                theme={(theme) => getModifiedReactSelectTheme(theme)}
                isSearchable
                value={selectedType}
                onChange={(selected) => setSelectedType(selected)}
                options={options}
            />

            {isCountBased(selectedType) && <TextInput
                name="rounds"
                type="number"
                min="0"
                label="Set rounds"
                autoComplete="off"
                placeholder="100x"
                errors={errors.rounds}
                value={data.rounds}
                onChange={e => setData('rounds', e.target.value)}
            />}

            {isTimeBased(selectedType) && <TextInput
                name="total_seconds"
                type="number"
                min="0"
                label="Set total time"
                autoComplete="off"
                placeholder="99 seconds, but the last ain't one"
                errors={errors.total_seconds}
                value={data.total_seconds}
                onChange={e => setData('total_seconds', e.target.value)}
            />}

            {hasWorkTime(selectedType) && <TextInput
                name="work_seconds"
                type="number"
                min="0"
                label="Set work time"
                autoComplete="off"
                placeholder="Much seconds"
                errors={errors.work_seconds}
                value={data.work_seconds}
                onChange={e => setData('work_seconds', e.target.value)}
            />}

            {hasRestTime(selectedType) && <TextInput
                name="rest_seconds"
                type="number"
                min="0"
                label="Set rest time"
                autoComplete="off"
                placeholder="Srsly? 😅"
                errors={errors.rest_seconds}
                value={data.rest_seconds}
                onChange={e => setData('rest_seconds', e.target.value)}
            />}

            <TextArea
                className="h-24"
                name="description"
                label="Workout description"
                autoComplete="off"
                placeholder="Some description (optional)"
                errors={errors.description}
                defaultValue={data.description}
                onChange={e => setData('description', e.target.value)}
            />

            <div className="flex justify-between items-center space-x-4">
                <PrimaryButton type="submit" className="w-full" loading={processing}>Save</PrimaryButton>
                <SecondaryButton type="button" className="w-full" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
            </div>
        </form>
    );
};

export default SetForm;

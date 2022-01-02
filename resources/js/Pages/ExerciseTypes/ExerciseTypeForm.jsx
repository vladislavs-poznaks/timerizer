import React from 'react'
import TextInput from "@/Shared/Components/TextInput";
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import SecondaryButton from "@/Shared/Components/SecondaryButton";
import CheckBoxInput from "@/Shared/Components/CheckBoxInput";

const ExerciseTypeForm = ({data, setData, errors, processing, setIsOpen, handleSubmit}) => {
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <TextInput
                    name="name"
                    label="Exercise name"
                    autoComplete="off"
                    placeholder="Lunges"
                    errors={errors.name}
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <TextInput
                    name="url"
                    label="Video url"
                    autoComplete="off"
                    placeholder="www.youtube.com"
                    errors={errors.url}
                    value={data.url}
                    onChange={e => setData('url', e.target.value)}
                />
            </div>

            <CheckBoxInput
                label="Per side"
                name="per_side"
                checked={data.per_side}
                onChange={e => setData('per_side', e.target.checked)}
            />

            <div className="flex justify-between items-center space-x-4">
                <PrimaryButton type="submit" className="w-full" loading={processing}>Save</PrimaryButton>
                <SecondaryButton type="button" className="w-full" onClick={() => setIsOpen(false)}>Cancel</SecondaryButton>
            </div>
        </form>
    );
};

export default ExerciseTypeForm;

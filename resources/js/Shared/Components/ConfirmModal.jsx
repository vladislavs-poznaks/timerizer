import React from 'react'
import Modal from "./Modal";
import {TrashIcon} from "@heroicons/react/solid";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import useConfirm from "@/hooks/useConfirm";

const ConfirmModal = () => {
    const { onConfirm, onCancel, confirmState } = useConfirm();

    return (
        <Modal isOpen={confirmState.show}>
            <div className="p-4 flex justify-center">
                <TrashIcon className="w-16 h-16 text-purple-600" />
            </div>
            <div className="flex flex-col space-y-2 justify-center">
                <p className="text-center text-gray-800 dark:text-gray-200 text-xl font-bold">
                    Confirm deleting
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    {confirmState?.text && confirmState.text}
                </p>
            </div>

            <div className="flex justify-between items-center space-x-4">
                <PrimaryButton type="submit" className="w-full" onClick={onConfirm}>Confirm</PrimaryButton>
                <SecondaryButton type="button" className="w-full" onClick={onCancel}>Cancel</SecondaryButton>
            </div>
        </Modal>
    );
};

export default ConfirmModal;

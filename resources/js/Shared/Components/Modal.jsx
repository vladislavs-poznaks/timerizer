import React from 'react'
import {Dialog, Transition} from "@headlessui/react";

const Modal = ({title, children, isOpen, setIsOpen, className}) => {
    return (
        <Transition
            show={isOpen}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-75 opacity-0"
            enterTo="transform scale-200 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Dialog onClose={setIsOpen} className={className}>
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <div
                            className="inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-4"
                        >
                            <Dialog.Title>{title}</Dialog.Title>
                            {children}
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;

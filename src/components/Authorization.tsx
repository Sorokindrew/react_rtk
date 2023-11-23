import React, { useState } from 'react';

import { Modal } from './Modal';

import { AuthorizationForm } from './AuthorizationForm';

export function Authorization() {
    const [isModal, setIsModal] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const signInHandler = () => {
        setIsModal(true);
        setIsRegistered(true);
    };

    const signUpHandler = () => {
        setIsModal(true);
        setIsRegistered(false);
    };

    const closeModal = () => {
        setIsModal(false);
    };

    return (
        <>
            <button className="border bg-gray-100 mr-2 rounded-md text-lg px-1 py-1" type="submit" onClick={signInHandler}>Sign in</button>
            <button className="border bg-gray-100 rounded-md text-lg px-1 py-1" onClick={signUpHandler}>Sign up</button>
            {
                isModal && (
                    <Modal>
                        <AuthorizationForm isRegistered={isRegistered} closeModal={closeModal} />
                    </Modal>
                )
            }
        </>

    );
}
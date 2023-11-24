import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Modal } from '../Modal';
import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';
import { AuthorizationProps } from '../../models/models';

import styles from './Authorization.module.css';

export function Authorization({ loggedUser, onLogout }: AuthorizationProps) {
    const [isModal, setIsModal] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const nav = useNavigate();


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

    const logoutHandler = () => {
        onLogout('');
        nav('/');
    };

    return (
        <>
            {loggedUser && (
                <button className={styles.button} onClick={logoutHandler}>Logout</button>
            )}
            {!loggedUser && (
                <>
                    <button className={styles.button} type="submit" onClick={signInHandler}>Sign in</button>
                    <button className={styles.button} onClick={signUpHandler}>Sign up</button>
                </>
            )}
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
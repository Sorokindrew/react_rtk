import React, { useEffect, useRef } from 'react';

import { Formik, Field, Form } from 'formik';

import { FormProps } from '../models/models';

import styles from './AuthorizationForm.module.css';



export function AuthorizationForm({ isRegistered, closeModal }: FormProps) {


    const loginValidator = (value: string) => {
        if (!value.trim()) {
            return 'Required';
        }
        else if (value.trim().length < 3) {
            return 'Length of login should be more than 3 symbols';
        }
        else if (value.startsWith(' ')) {
            return 'Login cannot starts with space.';
        }
    };

    const passwordValidator = (value: string) => {
        if (!value.trim()) {
            return 'Required';
        }
        else if (value.length < 6) {
            return 'Password length should be longer than 6 symbols';
        }
        else if (value.startsWith(' ')) {
            return 'Password cannot starts with space.';
        }
    };

    const handleSubmit = (values: { login: string, password: string }) => {
        console.log(values);
        closeModal();
    };

    return (
        <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSubmit}>
            {({ errors, touched }) => {
                return (
                    <Form className={styles.form}>
                        <label className="text-black flex flex-col text-lg mb-5 pt-3">
                            <span className="font-bold mb-1">Login</span>
                            <Field name="login" validate={loginValidator} />
                        </label>
                        {touched.login && errors.login && (
                            <div className="text-red-600 mb-2">{errors.login}</div>
                        )}

                        <label className="text-black flex flex-col text-lg mb-5 pt-3">
                            <span className="font-bold mb-1">Password</span>
                            <Field name="password" validate={passwordValidator} />
                        </label>
                        {touched.password && errors.password && (
                            <div className="text-red-600 mb-2">{errors.password}</div>
                        )}

                        <button type="submit" className="px-1 py-1 rounded-md bg-gray-500 w-[100px]">
                            {isRegistered ? 'Sign in' : 'Sign up'}
                        </button>

                        <button className="absolute h-10 w-10 top-[10px] right-[10px] cursor-pointer" onClick={closeModal}>
                            <span className="h-10 w-1 bg-black rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <span className="h-10 w-1 bg-black -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </button>

                    </Form>
                );
            }}

        </Formik>
    );
}
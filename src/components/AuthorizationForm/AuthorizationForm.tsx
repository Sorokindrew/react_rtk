import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form } from 'formik';

import { FormProps, UsersState } from '../../models/models';
import { addUser } from '../../store/usersSlice';
import { RootState } from '../../store/store';
import { userContext } from '../../context/userContext';
import { loginValidator, passwordValidator } from '../../utils/formikValidators';
import { loginUser } from '../../utils/loginUser';
import { getUsers } from '../../utils/getUsers';

import styles from './AuthorizationForm.module.css';

export function AuthorizationForm({ isRegistered, closeModal }: FormProps) {

    const dispatch = useDispatch();
    const users = useSelector<RootState, UsersState>(getUsers);
    const { onChange } = useContext(userContext);
    const baseCssCross = 'h-10 w-1 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

    const handleSubmit = (values: { login: string, password: string }) => {
        if (!isRegistered) {
            dispatch(addUser(values));
            loginUser(values.login, onChange);
        }
        else if (users[values.login] === values.password && isRegistered) {
            loginUser(values.login, onChange);
        };
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

                        <button className="absolute h-10 w-10 top-[10px] right-[10px] cursor-pointer"
                            onClick={closeModal}>
                            <span className={baseCssCross + ' rotate-45'} />
                            <span className={baseCssCross + ' -rotate-45'} />
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
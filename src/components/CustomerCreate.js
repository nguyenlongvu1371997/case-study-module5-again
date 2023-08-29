import { Formik, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';


export default function CustomerCreate() {
    const [customer, setCustomer] = useState({
        name: '',
        dob: '',
        gender: '',
        phone: '',
        idNumber: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {


    };

    return (
        <Formik
            initialValues={{
                name: '',
                dob: '',
                gender: '',
                phone: '',
                idNumber: '',
                email: '',
                address: '',
            }}

            onSubmit={async (value) => {
                await handleSubmit(value)
            }}
            validationSchema={yup.object({
                name: yup.string().required('cant not empty'),
                dod: yup.date().required('cant be empty'),
                phone: yup.string().required('cant be empty').matches(/^\d{10}$/,'phone number must be 10 number'),
                idNumber: yup.string().required('cant be empty').matches(/^\d{10}$/,'id must be 10 number'),
                email: yup.string().required('cant not empty').email('input correct email'),
                address: yup.string().required('cant not empty')
            })}


        >
            <h1>Create customer</h1>
            <form>
                <label htmlFor="dob">Ngày sinh:</label>
                <Field
                    type="date"
                    id="dob"
                    name="dob"

                />

                <label htmlFor="gender">Giới tính:</label>
                <select
                    id="gender"
                    name="gender"

                >
                    <option value="">Chọn giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                </select>

                <label htmlFor="phone">Số điện thoại:</label>
                <Field
                    type="tel"
                    id="phone"
                    name="phone"

                />

                <label htmlFor="idNumber">Căn cước:</label>
                <Field
                    type="text"
                    id="idNumber"
                    name="idNumber"

                />

                <label htmlFor="email">Email:</label>
                <Field
                    type="email"
                    id="email"
                    name="email"

                />

                <label htmlFor="address">Địa chỉ:</label>
                <textarea
                    id="address"
                    name="address"

                ></textarea>

                <button type="submit">Thêm mới</button>
            </form>
        </Formik>
    );
}


import React, { useState } from 'react';
import Navigation from './Navigation';
import { Formik, Field, ErrorMessage } from 'formik';


export default function ServiceCreate() {
    const [service, setService] = useState({
        serviceName: '',
        area: '',
        rentalCost: '',
        maxCapacity: '',
        rentalType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService((prevService) => ({
            ...prevService,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(service);
    };

    return (
        <div>
            <Navigation />
            <div><h1>Thêm mới dịch vụ</h1></div>
            <Formik
                initialValues={{
                    serviceName: '',
                    area: '',
                    rentalCost: '',
                    maxCapacity: '',
                    rentalType: '',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="serviceName">Tên dịch vụ:</label>
                    <Field
                        type="text"
                        id="serviceName"
                        name="serviceName"
                    />

                    <label htmlFor="area">Diện tích sử dụng:</label>
                    <Field
                        type="text"
                        id="area"
                        name="area"
                    />

                    <label htmlFor="rentalCost">Chi phí thuê:</label>
                    <Field
                        type="text"
                        id="rentalCost"
                        name="rentalCost"
                    />

                    <label htmlFor="maxCapacity">Số lượng người tối đa:</label>
                    <Field
                        type="number"
                        id="maxCapacity"
                        name="maxCapacity"                       
                    />

                    <label htmlFor="rentalType">Kiểu thuê:</label>
                    <select
                        id="rentalType"
                        name="rentalType"
                    >
                        <option value="">Chọn kiểu thuê</option>
                        <option value="day">Theo ngày</option>
                        <option value="month">Theo tháng</option>
                        <option value="year">Theo năm</option>
                        <option value="hour">Theo giờ</option>
                    </select>

                    <button type="submit">Thêm mới</button>
                </form>
            </Formik>
        </div>
    );
}
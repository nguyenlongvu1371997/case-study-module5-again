import React, { useState } from 'react';

export default function CustomerEdit() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="dob">Ngày sinh:</label>
            <input
                type="date"
                id="dob"
                name="dob"
                value={customer.dob}
                onChange={handleChange}
                required
            />

            <label htmlFor="gender">Giới tính:</label>
            <select
                id="gender"
                name="gender"
                value={customer.gender}
                onChange={handleChange}
                required
            >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
            </select>

            <label htmlFor="phone">Số điện thoại:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                required
            />

            <label htmlFor="idNumber">Căn cước:</label>
            <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={customer.idNumber}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="address">Địa chỉ:</label>
            <textarea
                id="address"
                name="address"
                value={customer.address}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Thêm mới</button>
        </form>
    );
}
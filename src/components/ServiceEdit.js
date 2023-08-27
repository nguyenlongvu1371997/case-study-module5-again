import React, { useState } from 'react';

export default function ServiceEdit() {
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
            <div><h1>Sửa dịch vụ</h1></div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="serviceName">Tên dịch vụ:</label>
                <input
                    type="text"
                    id="serviceName"
                    name="serviceName"
                    value={service.serviceName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="area">Diện tích sử dụng:</label>
                <input
                    type="text"
                    id="area"
                    name="area"
                    value={service.area}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="rentalCost">Chi phí thuê:</label>
                <input
                    type="text"
                    id="rentalCost"
                    name="rentalCost"
                    value={service.rentalCost}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="maxCapacity">Số lượng người tối đa:</label>
                <input
                    type="number"
                    id="maxCapacity"
                    name="maxCapacity"
                    value={service.maxCapacity}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="rentalType">Kiểu thuê:</label>
                <select
                    id="rentalType"
                    name="rentalType"
                    value={service.rentalType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Chọn kiểu thuê</option>
                    <option value="day">Theo ngày</option>
                    <option value="month">Theo tháng</option>
                    <option value="year">Theo năm</option>
                    <option value="hour">Theo giờ</option>
                </select>

                <button type="submit">Thêm mới</button>
            </form>
        </div>
    );
}
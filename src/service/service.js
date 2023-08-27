import axios from "axios";

export async function getServiceList() {
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
}

export async function getCustomerList() {
    const res = await axios.get("http://localhost:8080/customers");
    return res.data;
}


export async function getEmployeeList() {
    const res = await axios.get("http://localhost:8080/employees");
    return res.data;
}

export async function getContractList() {
    const res = await axios.get("http://localhost:8080/contracts");
    return res.data;
}
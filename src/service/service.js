import axios from "axios";

export async function getServiceList() {
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
}

export async function getService(id) {
    const res = await axios.get("http://localhost:8080/services/", id);
    return res.data;
}

export async function createService(service) {
    const res = await axios.post("http://localhost:8080/services/", service);
}

export async function editService(service) {
    const res = await axios.put("http://localhost:8080/services/", service.id, service);
}

export async function deleteService(id) {
    const res = await axios.delete("http://localhost:8080/services/"+ id);

}

export async function getCustomerList() {
    const res = await axios.get("http://localhost:8080/customers");
    return res.data;
}

export async function createCustomer(customer) {
    const res = await axios.post("http://localhost:8080/customers",customer);
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
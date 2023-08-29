import { useEffect, useState } from "react"
import { getCustomerList } from "../service/service";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

export default function CustomerList() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const customers = await getCustomerList();
        setList(customers);
    };

    const deleteCustomer = async () => {

    }

    const editCustomer = (id) => {
        navigate('/customer/edit/', id)
    }

    return (
        <>
            <Navigation />
            <div className="container-lg">
                <h2><b>LIST CUSTOMER</b> </h2>
                <div className="col-sm-4">
                    <button>Add customer</button>
                </div>
                <table className="table table-bordered">
                    <div className="col-sm-8"></div>

                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Name</td>
                            <td>Date of birth</td>
                            <td>Id card</td>
                            <td>Phone number</td>
                            <td>Action </td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((e, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.date_of_birth}</td>
                                <td>{e.id_card}</td>
                                <td>{e.phone_number}</td>
                                <td>
                                    <button onClick={() => editCustomer(e.id)}>Edit</button>
                                    <button onClick={() => deleteCustomer(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
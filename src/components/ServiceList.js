import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getServiceList } from "../service/service";
import Navigation from "./Navigation";
import { alignPropType } from "react-bootstrap/esm/types";
import { Link } from "react-router-dom";

export default function ServiceList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const services = await getServiceList();
    setList(services);
  };
  const deleteService = async () => {

  }

  const editService = () => {

  }

  return (
    <div>
      <Navigation />
      <h1 >SERVICE LIST</h1>
      <Button><Link to={`/service/create`}>Create service</Link></Button>
      <Row>
        {list.map((e) => (
          <Col md={4} key={e.id}>
            <Card className="mb-4 box-shadow">
              <Card.Img
                variant="top"
                src="https://www.hoteljob.vn/files/TRUNG/villa-la-gi-02.jpg"
              />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>{e.text}</Card.Text>
                <Card.Text className="font-weight-bold">{e.service}</Card.Text>
                <Button variant="outline-secondary">Edit</Button>
                <Button>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
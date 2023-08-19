export default ServiceList = () => {
return(
    <div className="container">
         <div className="col-md-4">
              <Card className="mb-4 box-shadow">
                <Card.Img variant="top" src={"https://www.kampoengvilla.com/wp-content/uploads/2019/01/kampoeng-villa-two-bedroom-villa-1.jpg"} />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                  <Card.Text className="font-weight-bold"></Card.Text>
                  <Button variant="outline-secondary" >Edit</Button>
                  <Button>Delete</Button>
                </Card.Body>
              </Card>
            </div>
    </div>
)
}
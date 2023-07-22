import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button} from "reactstrap"
import TablaItem from "./components/TablaItem"

const App = () => {


    const [PersonaItems, setPersonalItem] = useState([])

    const mostrarPersonalItem = async () => {

        const response = await fetch("api/PersonaItem/Lista");
        if (respode.ok) {
            const data = await response.jason();
            setPersonalItem(data);
        } else {
            console.log("Error en los datos de la lista")
        }
    }


    useEffect(() => {
        mostrarPersonalItem()
    },[])


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h4>Lista de Personal Items</h4>
                        </CardHeader>

                        <CardBody>
                            <Button size="sm" color="danger">Nuevo Item</Button>
                            <hr></hr>
                            <TablaItem data="PersonaItems" />
                        </CardBody>

                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default App;
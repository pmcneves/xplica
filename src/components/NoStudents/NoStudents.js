import { Col, Row, Container, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const NoStudents = () => {
    const history = useHistory()
    return (
        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <h1>
                        Oopps!
                    </h1> 
                    <h5>
                        Não tens alunos adicionados.
                    </h5>
                    <Button variant="dark" onClick={()=>history.push('/adicionaralun@')}>Adicionar alun@</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NoStudents

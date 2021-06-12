import { Col, Row } from 'react-bootstrap'
import loader from '../../assets/loader/loader.gif'


const Loader = () => (
    <Row>
        <Col className="d-flex justify-content-center">
            <img src={loader} alt="loading..." />
        </Col>
    </Row>
)


export default Loader

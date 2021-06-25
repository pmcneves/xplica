import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createContext, useEffect } from 'react'
import { getStudent } from './actions'
import Loader from '../../components/Loader/Loader'
import { Container, Row, Col } from "react-bootstrap"
import StudentCard from '../../containers/Cards/StudentCard/StudentCard'
import GradesCard from '../../containers/Cards/GradesCard/GradesCard'


export const studentInfo = createContext()

const Student = (props) => {
    const dispatch = useDispatch();
    const info = useSelector(state=>state.studentInfo.student)
    const loading = useSelector(state=>state.studentInfo.loading)


    useEffect(() => {
        dispatch(getStudent(props.match.params.id))
    }, [])

    if(loading) 
        return <Loader/>
    

    return (
        <Container className="mt-5">
            <Col lg={8} className="m-auto">
                <div className="student__wrapper">
                    <studentInfo.Provider value={info}>
                        <Row>
                            <Col>
                                <StudentCard />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <GradesCard />
                            </Col>
                        </Row>
                    </studentInfo.Provider>
                </div>
            </Col>
        </Container>
    )
}

export default Student

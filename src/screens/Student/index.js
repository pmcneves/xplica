import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getStudent } from './actions'
import Loader from '../../components/Loader/Loader'
import { Container, Row, Col } from "react-bootstrap"

const Student = (props) => {
    const dispatch = useDispatch();
    const student = useSelector(state=>state.student)

    useEffect(() => {
        dispatch(getStudent(props.match.params.id))
    }, [])

    if(student.loading) 
        return <Loader/>
    

    return (
        <Container className="mt-5 pt-4">
            <div className="student__wrapper">
                <div className="student__icons">
                    <div>
                        icon1
                    </div>
                    <div>
                        icon2
                    </div>
                    <div>
                        icon3
                    </div>
                    <div>
                        icon4
                    </div>
                </div>
                <div>
                    info
                </div>
            </div>

        </Container>
    )
}

export default Student

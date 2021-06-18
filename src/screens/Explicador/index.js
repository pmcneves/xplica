import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss'
import TutorTable from "../../containers/TutorTable/TutorTable";
import Summary from '../../containers/Summary/Summary'
import { Container } from 'react-bootstrap'
import { getStudents } from './actions';

const ExplicadorMenu = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getStudents())    
    }, []);

    return (
       <Container>
            <Summary/>
            <TutorTable/>
       </Container>
   )
}

export default ExplicadorMenu

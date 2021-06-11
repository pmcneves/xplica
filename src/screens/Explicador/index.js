import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss'
import TutorTable from "../../containers/TutorTable/TutorTable";
import Summary from '../../containers/Summary/Summary'
import { Container } from 'react-bootstrap'
import { getStudents } from './actions';

const ExplicadorMenu = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.explicandos.loading)
    
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

import './styles.scss'
import TutorTable from "../../containers/TutorTable/TutorTable";
import Summary from '../../containers/Summary/Summary'
import { Container } from 'react-bootstrap'



const ExplicadorMenu = () => {
    return (
       <Container>
            <Summary/>
            <TutorTable/>
       </Container>
   )
}

export default ExplicadorMenu

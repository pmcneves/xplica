import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from 'react-bootstrap/Button';
import './styles.scss'

const FontAwesomeIcons = ({icon, variant, fn, classes}) => (
    <Button variant={variant} onClick={fn} className={classes}>
        <FontAwesomeIcon icon={icon}/>
    </Button>)

export default FontAwesomeIcons

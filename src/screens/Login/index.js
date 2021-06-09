import { Col, Container, Form, Row } from 'react-bootstrap'
import './styles.scss'
import { useForm } from "react-hook-form";
import { logInToApp } from '../../firebase';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app'
import 'firebase/auth'
import { loggingInToStore } from './actions';


const Login = () => {
    const { register, handleSubmit } = useForm()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.uid)

    const logInFormSubmit = (data) => {
        if(data) {

            dispatch(loggingInToStore(data))
        }
    }
    // auth handler
    // const logInFormSubmit = async (data) => 
    //     await logInToApp(data)
    //     .catch(err => setError(err.code))
        
    // useEffect(() => {
    //     console.log(firebase.auth().currentUser)
    //     setLoading(!loading)
    // }, [user])

    // password visibility field 
    const passwordVisibilityHandler = () => setPasswordVisibility(!passwordVisibility)
    const textType = passwordVisibility ? 'text' : 'password'
    const faIcon = passwordVisibility ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>

    return (
        <div className="login__background">
            <Container>
                <Row>
                    <Col md={8} xs={10} lg={4} xl={4} className="mx-auto login__card">
                        <div className="text-center mb-3 mt-3">
                            <h1 className="login__title">Xplica</h1>
                        </div>
                        <Form onSubmit={handleSubmit(logInFormSubmit)}>
                            <Form.Group>
                                <Form.Label className="login__label">Email</Form.Label>
                                <Form.Control placeholder="Email" {
                                    ...register(
                                        `email`, 
                                        { 
                                            required: true,  
                                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
                                        }
                                    )
                                }/>
                                <p className="error1 error"></p>
                            </Form.Group>
                            <Form.Group className="mt-3 login__password">
                                <Form.Label className="login__label">Password</Form.Label>
                                <Form.Control type={textType} placeholder="Password" {...register(`password`, { required: true })}/>
                                <div onClick={passwordVisibilityHandler} className="login__password-icon">
                                    {faIcon}
                                </div>
                                <p className="error2 error"></p>
                            </Form.Group>
                            <div className="text-center mb-3">
                                <button
                                    type="submit"
                                    className="login__submitBtn mt-3">
                                        Conectar
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>            
        </div>
    )
}

export default Login
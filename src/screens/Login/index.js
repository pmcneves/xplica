import { Col, Container, Form, Row } from 'react-bootstrap'
import './styles.scss'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { loggingInToStore } from './actions';
import { logInToApp } from '../../firebase';
import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const logInFormSubmit = async (data) => await logInToApp(data)

    const passwordVisibilityHandler = () => setPasswordVisibility(!passwordVisibility)
    const textType = passwordVisibility ? 'text' : 'password'
    const faIcon = passwordVisibility ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(loggingInToStore(user.uid))
                console.log('logged in')
            } else {
                // console.log('logged out')
            }
          })
    })

    return (
        <div className="login__background">
            <Container>
                <Row>
                    <Col md={3} className="mx-auto login__card">
                        <div className="text-center mb-3 mt-3">
                            <h1 className="login__title">Xplica</h1>
                        </div>
                        <Form onSubmit={handleSubmit(logInFormSubmit)}>
                            <Form.Group>
                                <Form.Label className="login__label">Email</Form.Label>
                                <Form.Control placeholder="Email" {...register(`email`, { required: true })}/>
                            </Form.Group>
                            <Form.Group className="mt-3 login__password">
                                <Form.Label className="login__label">Password</Form.Label>
                                <Form.Control type={textType} placeholder="Password" {...register(`password`, { required: true })}/>
                                <div onClick={passwordVisibilityHandler} className="login__password-icon">
                                    {faIcon}
                                </div>
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
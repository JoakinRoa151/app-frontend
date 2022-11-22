import { Container, Row, Col} from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';

const CrearAutorizacion = () => {

    const [autorizacion, setautorizacion] = useState({
        id: '',
        rut_autorizacion: '',
    });

    const handleInputChange = (event) => {
        setautorizacion({
            ...autorizacion,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setautorizacion({
            ...autorizacion,
            [event.target.name]: event.target.value
        });

        axios.post('http://localhost:8082/autorizacion/guardarAutorizacion', autorizacion)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location = "/autorizacion" //redirect
            })
    }

    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Crear Autorizacion</h1>
                </Col>
            </Row>
            <form className='col' onSubmit={handleSubmit}><br></br>
                <label>Rut</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese el rut'
                        className='form-control'
                        type='text'
                        name='rut_autorizacion'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>
                <div className='col-md-3'>
                    <button className="btn btn-primary" type="submit">Crear Autorizacion</button>
                </div>
            </form>

        </Container>
    );


}

export default CrearAutorizacion;
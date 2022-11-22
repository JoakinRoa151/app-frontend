import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';

const CrearInasistencia = () => {

    const [inasistencia, setinasistencia] = useState({
        id: '',
        rut_inasistencia: '',
        fecha: '',
        justificativo: '',
    });

    const handleInputChange = (event) => {
        setinasistencia({
            ...inasistencia,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setinasistencia({
            ...inasistencia,
            [event.target.name]: event.target.value
        });

        axios.post('http://localhost:8082/inasistencia/guardarInasistencia', inasistencia)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location = "/inasistencia" //redirect
            })
    }

    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Crear inasistencia</h1>
                </Col>
            </Row>
            <form className='col' onSubmit={handleSubmit}><br></br>
                <label>Rut</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese el rut'
                        className='form-control'
                        type='text'
                        name='rut_inasistencia'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Fecha</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese la fecha'
                        className='form-control'
                        type='date'
                        name='fecha'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Justificativo</label>
                <div className='col-md-3'>
                    <select className="form-select" name='justificativo' onChange={handleInputChange} aria-label="Default select example">
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                </div><br></br>
                <div className='col-md-3'>
                    <button className="btn btn-primary" type="submit">Crear Inasistencia</button>
                </div>
            </form>

        </Container>
    );


}

export default CrearInasistencia;
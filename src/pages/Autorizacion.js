import axios from 'axios';
import { Container, Row, Col, Table, Button, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Autorizaciones = () => {
    const [autorizaciones, setAutorizaciones] = useState([]);

    const [rut_autorizacion, setRut] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getAutorizaciones = async () => {
        try{
            let url = 'http://localhost:8082/autorizacion/listarAutorizaciones';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setAutorizaciones(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAutorizaciones();
    }, []);
    
    const print = (rut) => {
        setRut(rut);
        handleShow();
    }

    const handleDelete = async(id) => {
        await axios.get('http://localhost:8082/autorizacion/eliminar/' + id);
        //console.log(id);
    }


    return (
        <>
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Lista de autorizaciones</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button href="/crearAutorizacion"variant="primary" className="mt-4">
                    Crear autorizacion
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autorizaciones.map((autorizacion) => (
                                <tr key={autorizacion.id}>
                                    <td>{autorizacion.id}</td>
                                    <td>{autorizacion.rut_autorizacion}</td>
                                    <td><Button variant="danger"  onClick={()=>print(autorizacion.id)}>Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar autorizacion</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar la autorizacion?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" href="/autorizacion" onClick={()=>handleDelete(rut_autorizacion)}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
};

export default Autorizaciones;
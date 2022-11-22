import axios from 'axios';
import { Container, Row, Col, Table, Button, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Sueldos = () => {
    const [sueldos, setsueldos] = useState([]);

 




    const getSueldos = async () => {
        try{
            let url = 'http://localhost:8082/sueldo/obtenerSueldos';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setsueldos(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    const calcularPlanilla = async () => {
        let url ='http://localhost:8082/sueldo/calcularSueldo';
        const response = await axios.get(url);
            if (response.status === 200) {
                getSueldos();
            }
    }

    
    return (
        <>
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Lista de calculo</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button className="mt-5" onClick={() => calcularPlanilla()} size="lg">Calcular sueldos</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                                <th>Años servicio</th>
                                <th>Monto Años de servicio </th>
                                <th>Monto horas extra</th>
                                <th>Monto descuentos</th>
                                <th>Cotizacion previsional</th>
                                <th>Cotizacion salud</th>
                                <th>Sueldo Fijo</th>
                                <th>Sueldo Bruto</th>
                                <th>Sueldo Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sueldos.map((sueldo) => (
                                <tr key={sueldo.id}>
                                    <td>{sueldo.id}</td>
                                    <td>{sueldo.rut_sueldo}</td>
                                    <td>{sueldo.anios_servicio}</td>
                                    <td>{sueldo.monto_bonificacion_servicios}</td>
                                    <td>{sueldo.monto_horas_extras}</td>
                                    <td>{sueldo.monto_descuentos}</td>
                                    <td>{sueldo.cotizacion_previsional}</td>
                                    <td>{sueldo.cotizacion_salud}</td>
                                    <td>{sueldo.sueldo_fijo}</td>
                                    <td>{sueldo.sueldo_bruto}</td>
                                    <td>{sueldo.monto_sueldo_final}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default Sueldos;
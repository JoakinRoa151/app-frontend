import { Nav, Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="/">Muebles Stgo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar"/>
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/inasistencia">Inasistencias</Nav.Link>
                            <Nav.Link href="/empleado">Empleados</Nav.Link>
                            <Nav.Link href="/autorizacion">Autorizaciones</Nav.Link>
                            <Nav.Link href="/uploadClockData">Subir datos</Nav.Link>
                            <Nav.Link href="/calculoPlanilla">Calcular planilla</Nav.Link>                
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;
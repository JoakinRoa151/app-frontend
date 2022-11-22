import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Container} from 'react-bootstrap';
import Index from './pages/Index';
import Inasistencia from './pages/Inasistencia';
import Empleado from './pages/Empleado';
import CrearEmpleado from './pages/CrearEmpleado';
import CrearAutorizacion from './pages/CrearAutorizacion';
import Autorizacion from './pages/Autorizacion';
import UploadClockData from './pages/UploadClockData';
import CalculoPlanilla from './pages/CalculoPlanilla';
import CrearInasistencia from './pages/CrearInasistencia';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Index/>}  exact/>
          <Route path="/inasistencia" element={<Inasistencia/>} exact/>
          <Route path="/empleado" element={<Empleado/>} exact/>
          <Route path="/crearEmpleado" element={<CrearEmpleado/>} exact/>
          <Route path="/crearAutorizacion" element={<CrearAutorizacion/>} exact/>
          <Route path="/autorizacion" element={<Autorizacion/>} exact/>
          <Route path="/uploadClockData" element={<UploadClockData/>} exact/>
          <Route path="/calculoPlanilla" element={<CalculoPlanilla/>} exact/>
          <Route path="/crearInasistencia" element={<CrearInasistencia/>} exact/>
        </Routes> 
      </Container>
    </Layout>
  );
}

export default App;

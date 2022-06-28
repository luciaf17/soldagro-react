import React from 'react';
import {
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 Container,
 Row,
 Col,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearPuesto = () => {
 const [form, handleChange, , handleReset] = useForm({
  nombre: '',
  tipo_puesto: '',
 });

 const { nombre, tipo_puesto } = form;

 const [tiposPuestos, isLoading, isError] = useGetData(
  'http://localhost:3001/api/tipospuestos'
 );

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const puesto = { nombre, tipo_puesto };

  const res = await axios.post('http://localhost:3001/api/puestos', puesto, {
   headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
   },
  });

  handleReset();
 };

 return (
  <Container fluid='fluid'>
   <Row>
    <Col
     md={{
      offset: 2,
      size: 8,
     }}
     sm='12'
    >
     <Form className='create-form form-control-md' action=''>
      <h1 className='text-center'>
       <span className='font-weight-bold text-center'>Crear Puesto</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Nombre</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='nombre'
        value={nombre}
       />
      </FormGroup>
      <FormGroup>
       <Label>Tipo</Label>
       <Input
        type='select'
        value={tipo_puesto}
        onChange={handleChange}
        name='tipo_puesto'
       >
        <option disabled value=''></option>
        {tiposPuestos.map((tipoPuesto) => (
         <option
          key={tipoPuesto.tipo_puesto_id}
          value={tipoPuesto.tipo_puesto_id}
         >
          {tipoPuesto.tipo}
         </option>
        ))}
       </Input>
      </FormGroup>
      <div className='d-grid gap-2 col-3 mx-auto pt-2'>
       <Button
        className='btn btn-block'
        onClick={handleSubmit}
        color='primary'
        type='submit'
       >
        Guardar
       </Button>
       <Button className='btn btn-block' onClick={handleReset} color='primary'>
        Reset
       </Button>
      </div>
     </Form>
    </Col>
   </Row>
  </Container>
 );
};

export default CrearPuesto;

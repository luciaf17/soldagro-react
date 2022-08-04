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
import axios from 'axios';

const CrearMaterial= () => {
 const [form, handleChange, ,handleReset] = useForm({
  codigo_material: '',
 });

 const { codigo_material } = form;

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const material = { codigo_material };

  const res = await axios.post(
   'http://localhost:3001/api/materiales',
   material,
   {
    headers: {
     Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
    },
   }
  );

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
       <span className='font-weight-bold text-center'>Crear Material</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Codigo Material</Label>
       <Input type='text' onChange={handleChange} name='codigo_material' value={codigo_material} />
      </FormGroup>
      <div className='d-grid gap-2 col-3 mx-auto pt-2'>
       <Button
        className='btn btn-block'
        type='submit'
        onClick={handleSubmit}
        color='primary'
       >
        Guardar
       </Button>
       <Button
        className='btn btn-block'
        type='reset'
        onClick={handleReset}
        color='primary'
       >
        Reset
       </Button>
      </div>
     </Form>
    </Col>
   </Row>
  </Container>
 );
};

export default CrearMaterial;

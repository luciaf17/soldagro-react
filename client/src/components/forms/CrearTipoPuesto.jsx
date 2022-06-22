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

const CrearTipoPuesto = () => {
 const [form, handleChange, handleReset] = useForm({
  tipo: '',
 });

 const { tipo } = form;

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  //preparar el formdata
  const formData = new FormData();
  for (const key in form) {
   formData.append(key, form[key]);
  }

  //enviar el formdata
  const res = await axios({
   method: 'post',
   url: 'http://localhost:3001/api/tipospuestos',
   data: formData,
   headers: { 'Content-Type': 'multipart/form-data' },
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
       <span className='font-weight-bold text-center'>Crear Tipo Puesto</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Tipo</Label>
       <Input type='text' onChange={handleChange} name='tipo' value={tipo} />
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

export default CrearTipoPuesto;

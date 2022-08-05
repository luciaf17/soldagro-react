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

const CrearHojaBarra = () => {
 const [form, handleChange, ,handleReset] = useForm({
  largo: '',
  ancho: '',
  stock: '',
  deposito: '',
  proveedor : '',
  materia_prima : '',
 });

 const { largo, ancho, stock, deposito, proveedor, materia_prima } = form;

 const [depositos, isLoading, isError] = useGetData(
    'http://localhost:3001/api/depositos'
    );
 const [proveedores] = useGetData(
    'http://localhost:3001/api/proveedores'
    );
const [materiasPrimas] = useGetData(
    'http://localhost:3001/api/materiasprimas'
    );



 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const hojaBarra = { largo, ancho, stock, deposito, proveedor, materia_prima};

  const res = await axios.post(
   'http://localhost:3001/api/hojasbarras',
   hojaBarra,
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
       <span className='font-weight-bold text-center'>Crear Hoja Barra</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Largo</Label>
       <Input type='text' onChange={handleChange} name='largo' value={largo} />
      </FormGroup>
      <FormGroup>
       <Label>Ancho</Label>
       <Input type='text' onChange={handleChange} name='ancho' value={ancho} />
      </FormGroup>
      <FormGroup>
       <Label>Stock</Label>
       <Input type='text' onChange={handleChange} name='stock' value={stock} />
      </FormGroup>
      <FormGroup>
       <Label>Materia Prima</Label>
       <Input
        type='select'
        value={materia_prima}
        onChange={handleChange}
        name='materia_prima'
       >
        <option disabled value=''></option>
        {materiasPrimas.map((materiaPrima) => (
         <option
          key={materiaPrima.materia_prima_id}
          value={materiaPrima.materia_prima_id}
         >
          {materiaPrima.nominal}
         </option>
        ))}
       </Input>
      </FormGroup>
      <FormGroup>
       <Label>Deposito</Label>
       <Input
        type='select'
        value={deposito}
        onChange={handleChange}
        name='deposito'
       >
        <option disabled value=''></option>
        {depositos.map((deposito) => (
         <option
          key={deposito._id}
          value={deposito.deposito_id}
         >
          {deposito.nombre}
         </option>
        ))}
       </Input>
      </FormGroup>
      <FormGroup>
       <Label>Proveedor</Label>
       <Input
        type='select'
        value={proveedor}
        onChange={handleChange}
        name='proveedor'
       >
        <option disabled value=''></option>
        {proveedores.map((proveedor) => (
         <option
          key={proveedor._id}
          value={proveedor.proveedor_id}
         >
          {proveedor.nombre}
         </option>
        ))}
       </Input>
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

export default CrearHojaBarra;

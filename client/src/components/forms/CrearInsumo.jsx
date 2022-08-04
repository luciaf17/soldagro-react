import React from 'react';
import {
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 InputGroupText,
 InputGroup,
 Container,
 Row,
 Col,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearInsumo = () => {
 const [form, handleChange, ,handleReset] = useForm({
    descripcion: '',
    marca: '',
    tamanio: '',
    unidad_medida: '',
    precio: '',
    stock: '',
    deposito_id: '',
    proveedor_id : '',
 });

 const { descripcion, marca, unidad_medida, tamanio, stock, precio, deposito_id, proveedor_id } = form;

 const [depositos, isLoading, isError] = useGetData(
    'http://localhost:3001/api/depositos'
    );
 const [proveedores] = useGetData(
    'http://localhost:3001/api/proveedores'
    );


 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const insumo = { descripcion, marca, tamanio, precio, unidad_medida, stock, deposito_id, proveedor_id };

  const res = await axios.post(
   'http://localhost:3001/api/insumos',
   insumo,
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
       <span className='font-weight-bold text-center'>Crear Insumo</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Descripción</Label>
       <Input type='text' onChange={handleChange} name='descripcion' value={descripcion} />
      </FormGroup>
      <FormGroup>
       <Label>Marca</Label>
       <Input type='text' onChange={handleChange} name='marca' value={marca} />
      </FormGroup>
      <FormGroup>
       <Label>Stock</Label>
       <Input type='text' onChange={handleChange} name='stock' value={stock} />
      </FormGroup>
      <FormGroup>
       <Label>Tamaño</Label>
       <Input type='text' onChange={handleChange} name='tamanio' value={tamanio} />
      </FormGroup>
      <FormGroup>
       <Label>Unidad de Medida</Label>
       <Input type='text' onChange={handleChange} name='unidad_medida' value={unidad_medida} />
      </FormGroup>
      <FormGroup>
       <Label>Precio</Label>
       <InputGroup>
        <InputGroupText>$</InputGroupText>
       <Input type='text' onChange={handleChange} name='precio' value={precio} />
         </InputGroup>
      </FormGroup>
      <FormGroup>
       <Label>Deposito</Label>
       <Input
        type='select'
        value={deposito_id}
        onChange={handleChange}
        name='deposito_id'
       >
        <option disabled value=''></option>
        {depositos.map((deposito) => (
         <option
          key={deposito.materia_prima_id}
          value={deposito.materia_prima_id}
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
        value={proveedor_id}
        onChange={handleChange}
        name='proveedor_id'
       >
        <option disabled value=''></option>
        {proveedores.map((proveedor) => (
         <option
          key={proveedor.proveedor_id}
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

export default CrearInsumo;

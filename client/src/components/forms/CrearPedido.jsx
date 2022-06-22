import React, { useState } from 'react';
import {
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 InputGroup,
 InputGroupText,
 Container,
 Row,
 Col,
 ModalFooter,
 Modal,
 ModalHeader,
 ModalBody,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearPedido = () => {
 const [form, handleChange, handleReset] = useForm({
  fechaEntrega: '',
  ordenCompra: '',
  cliente: '',
  piezasTotales: [],
  precio: '',
  cantidad: '',
  precioTotal: '',
  plano: '',
  revision: '',
 });

 const {
  fechaEntrega,
  ordenCompra,
  cliente,
  pieza,
  precio,
  cantidad,
  precioTotal,
  plano,
  revision,
 } = form;

 const [piezas] = useGetData('http://localhost:3001/api/piezas');
 const [clientes] = useGetData('http://localhost:3001/api/clientes');

 // Modal open state
 const [modal, setModal] = useState(false);

 // Toggle for Modal
 const toggle = () => setModal(!modal);

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  for (const key in form) {
   formData.append(key, form[key]);
  }
  handleReset();
  console.log(form);
  //enviar el formdata
  const res = await axios({
   method: 'post',
   url: 'http://localhost:3001/api/pedidos',
   data: formData,
   headers: { 'Content-Type': 'multipart/form-data' },
  });
 };

 //agregar pieza
 const [piezasTotales, setPiezasTotales] = useState([]);

 const piezaNueva = {
  nombre: '',
  cantidad: 0,
 };

 const addPieza = (piezaNueva) => {
  setPiezasTotales([...piezasTotales, piezaNueva]);
  console.log(piezasTotales);
  //handleReset();
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
       <span className='font-weight-bold text-center'>Crear Pedido</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Fecha de Entrega</Label>
       <Input
        type='date'
        onChange={handleChange}
        name='fechaEntrega'
        value={fechaEntrega}
       />
      </FormGroup>
      <FormGroup>
       <Label>Orden de Compra</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='ordenCompra'
        value={ordenCompra}
       />
      </FormGroup>
      <FormGroup>
       <Label>Cliente</Label>
       <Input
        type='select'
        defaultValue={'DEFAULT'}
        onChange={handleChange}
        name='cliente'
       >
        <option disabled value={'DEFAULT'}></option>
        {clientes.map((cliente) => (
         <option key={cliente.cliente_id} value={cliente.cliente_id}>
          {cliente.nombre}
         </option>
        ))}
       </Input>
      </FormGroup>
      <FormGroup>
       <Label>Piezas: </Label> <br />
       {/* modal */}
       <Button color='primary' onClick={toggle}>
        Agregar Piezas
       </Button>
       <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 1000 }}
       >
        <ModalHeader toggle={toggle}>Agregar Piezas</ModalHeader>
        <ModalBody>
         <FormGroup>
          <Label>Codigo Cliente</Label>
          <Input
           type='select'
           onChange={handleChange}
           name='piezaNueva.nombre'
           value={piezaNueva.nombre}
          >
           <option disabled value={'DEFAULT'}></option>
           {piezas.map((pieza) => (
            <option key={pieza.pieza_id} value={pieza}>
             {pieza.codigo_cliente}
            </option>
           ))}
          </Input>
         </FormGroup>
         <FormGroup>
          <Label>Cantidad</Label>
          <Input
           type='text'
           onChange={handleChange}
           name='piezaNueva.cantidad'
           value={piezaNueva.cantidad}
          />
         </FormGroup>
        </ModalBody>
        <ModalFooter>
         <Button color='primary' onClick={() => addPieza(piezaNueva)}>
          Agregar
         </Button>{' '}
         <Button onClick={toggle}>Cancelar</Button>
        </ModalFooter>
       </Modal>
      </FormGroup>
      <FormGroup>
       {/* automatico */}
       <Label>Precio Total</Label>
       <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input
         type='text'
         onChange={handleChange}
         name='precioTotal'
         value={precioTotal}
        />
       </InputGroup>
      </FormGroup>
      <FormGroup>
       <Label>Observaciones</Label>
       <Input
        type='textarea'
        onChange={handleChange}
        name='plano'
        value={plano}
       />
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

export default CrearPedido;

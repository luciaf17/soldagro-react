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
 Table,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearPedido = () => {
 const [form, handleChange, , handleReset] = useForm({
  fecha_entrega: '',
  orden_compra: '',
  cliente: '',
  precio_total: '',
  observacion: '',
 });

 const { fecha_entrega, orden_compra, cliente, observacion, precio_total } =
  form;

 const [piezas_pedido] = useGetData('http://localhost:3001/api/piezas');
 const [clientes_pedido] = useGetData('http://localhost:3001/api/clientes');

 let piezasFiltradas = piezas_pedido.filter(
  (pieza) => pieza.cliente.cliente_id === Number(cliente)
 );

 // Modal open state
 const [modal, setModal] = useState(false);

 // Toggle for Modal
 const toggle = () => setModal(!modal);

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const pedido = {
   fecha_entrega,
   orden_compra,
   cliente,
   piezas,
   precio_total,
   observacion,
  };

  const res = await axios.post('http://localhost:3001/api/pedidos', pedido, {
   headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
   },
  });

  handleReset();
 };

 const [piezaNueva, handleChangePieza, , ,] = useForm({
  codigo_cliente: '',
  cantidad: null,
 });

 console.log(piezaNueva);

 //agregar pieza
 const [piezas, setPiezas] = useState([]);

 const addPieza = (piezaNueva) => {
  setPiezas([...piezas, piezaNueva]);
 };
 console.log(piezas);

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
        name='fecha_entrega'
        value={fecha_entrega}
       />
      </FormGroup>
      <FormGroup>
       <Label>Orden de Compra</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='orden_compra'
        value={orden_compra}
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
        {clientes_pedido.map((cliente) => (
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
       <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 500 }}>
        <ModalHeader toggle={toggle}>Agregar Piezas</ModalHeader>
        <ModalBody>
         <FormGroup>
          <Label>Codigo Cliente</Label>
          <Input
           type='select'
           defaultValue={'DEFAULT'}
           onChange={handleChangePieza}
           name='codigo_cliente'
          >
           <option disabled value={'DEFAULT'}></option>
           {piezasFiltradas.map((pieza) => (
            <option key={pieza.pieza_id} value={pieza.codigo_cliente}>
             {pieza.codigo_cliente}
            </option>
           ))}
          </Input>
         </FormGroup>
         <FormGroup>
          <Label>Cantidad</Label>
          <Input type='text' onChange={handleChangePieza} name='cantidad' />
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
      <Label>Piezas Agregadas</Label>
      <Table striped responsive>
       <thead>
        <tr>
         <th>Codigo Cliente</th>
         <th>Cantidad</th>
        </tr>
       </thead>
       <tbody>
        {piezas.map((pieza) => (
         <tr key={pieza.codigo_cliente}>
          <td>{pieza.codigo_cliente}</td>
          <td>{pieza.cantidad}</td>
         </tr>
        ))}
       </tbody>
      </Table>
      <FormGroup>
       {/* automatico */}
       <Label>Precio Total</Label>
       <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input
         type='text'
         onChange={handleChange}
         name='precio_total'
         value={precio_total}
        />
       </InputGroup>
      </FormGroup>
      <FormGroup>
       <Label>Observaciones</Label>
       <Input
        type='textarea'
        onChange={handleChange}
        name='observacion'
        value={observacion}
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

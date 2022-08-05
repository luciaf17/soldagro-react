import React from "react";
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
} from "reactstrap";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import useGetData from '../../hooks/useGetData';

const CrearPieza = () => {

  const [form, handleChange, , handleReset] = useForm({
    codigo_cliente: "",
    nombre: "",
    peso: "",
    largo_superficie: "",
    plano: "",
    revision: "",
    cliente: "",
    materia_prima: "",
    forma: "",
    despacho: "",
    grupo: "",
    nominal: "",
    conjunto: "",
    deposito: "",
    precio: "",
    estructura: {}
  });

  const {codigo_cliente, nombre, peso, largo_superficie, plano, revision, cliente, materia_prima, forma, despacho, grupo, nominal, conjunto, deposito, precio } = form;

  const [depositos] = useGetData(
    'http://localhost:3001/api/depositos'
    );
  const [despachos] = useGetData(
    'http://localhost:3001/api/despachos'
    );
  const [clientes] = useGetData(
    'http://localhost:3001/api/clientes'
    );
  const [materiasPrimas] = useGetData(
    'http://localhost:3001/api/materiasprimas'
    );

  //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const pieza = { codigo_cliente, nombre, peso, largo_superficie, plano, revision, cliente, materia_prima, forma, despacho, grupo, nominal, conjunto, deposito, precio };

  const res = await axios.post('http://localhost:3001/api/piezas', pieza, {
   headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
   },
  });

  handleReset();
 };
 
  return (
    <Container fluid="fluid">
      <Row>
        <Col
          md={{
            offset: 2,
            size: 8,
          }}
          sm="12"
        >
          <Form className="create-form form-control-md" action="">
            <h1 className="text-center">
              <span className="font-weight-bold text-center">Crear Pieza</span>
            </h1>
            <hr />
            <FormGroup>
              <Label>Codigo Cliente</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="codigo_cliente"
                value={codigo_cliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="nombre"
                value={nombre}
              />
            </FormGroup>
            <FormGroup>
              <Label>Peso</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="peso"
                value={peso}
              />
            </FormGroup>
            <FormGroup>
              <Label>Largo/Superficie</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="largo_superficie"
                value={largo_superficie}
              />
            </FormGroup>
            <FormGroup>
              <Label>Plano</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="plano"
                value={plano}
              />
            </FormGroup>
            <FormGroup>
              <Label>Revisión</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="revision"
                value={revision}
              />
            </FormGroup>
            <FormGroup>
              <Label>Forma</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="forma"
                value={forma}
              />
            </FormGroup>
            <FormGroup>
              <Label>Grupo</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="grupo"
                value={grupo}
              />
            </FormGroup>
            <FormGroup>
              <Label>Nominal</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="nominal"
                value={nominal}
              />
            </FormGroup>
            <FormGroup>
              <Label>Conjunto</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="conjunto"
                value={conjunto}
              />
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
          key={deposito.deposito_id}
          value={deposito.deposito_id}
         >
          {deposito.nombre}
         </option>
        ))}
       </Input>
      </FormGroup>
      <FormGroup>
       <Label>Cliente</Label>
       <Input
        type='select'
        value={cliente}
        onChange={handleChange}
        name='cliente'
       >
        <option disabled value=''></option>
        {clientes.map((cliente) => (
         <option
          key={cliente.cliente_id}
          value={cliente.cliente_id}
         >
          {cliente.nombre}
         </option>
        ))}
       </Input>
      </FormGroup>
      <FormGroup>
       <Label>Despacho</Label>
       <Input
        type='select'
        value={despacho}
        onChange={handleChange}
        name='despacho'
       >
        <option disabled value=''></option>
        {despachos.map((despacho) => (
         <option
          key={despacho.despacho_id}
          value={despacho.despacho_id}
         >
          {despacho.nombre}
         </option>
        ))}
       </Input>
      </FormGroup>
            <FormGroup>
              <Label>Precio</Label>
              <InputGroup>
                <InputGroupText>$</InputGroupText>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="precio"
                  value={precio}
                />
              </InputGroup>
            </FormGroup>
            <div className="d-grid gap-2 col-6 mx-auto pt-2">
              <Button
                className="btn btn-block"
                type='submit' 
                onClick={handleSubmit}
                color="primary"
              >
                Guardar
              </Button>
              <Button
                className="btn btn-block"
                onClick={handleReset}
                color="primary"
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

export default CrearPieza;

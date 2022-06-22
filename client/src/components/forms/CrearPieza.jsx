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
//import axios from "axios";
import { useForm } from "../../hooks/useForm";

const CrearPieza = () => {

  const [form, handleChange, handleReset] = useForm({
    codCliente: "",
    descripcion: "",
    peso: "",
    largoSup: "",
    plano: "",
    revision: "",
    cliente: "",
    matPrima: "",
    forma: "",
    despacho: "",
    grupo: "",
    nominal: "",
    conjunto: "",
    deposito: "",
    precio: "",
  });

  const {codCliente, descripcion, peso, largoSup, plano, revision, cliente, matPrima, forma, despacho, grupo, nominal, conjunto, deposito, precio } = form;

  //se envian los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    //preparar el formdata
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    //enviar el formdata
    //axios.post('http://localhost:3000/api/cargaPieza', formData);
    //body: JSON.stringify(formData); otra forma de enviar el formdata

  console.log(form);
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
                name="codCliente"
                value={codCliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Descripción</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="descripcion"
                value={descripcion}
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
                name="largoSup"
                value={largoSup}
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
              <Label>Cliente</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="cliente"
                value={cliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Materia Prima</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="matPrima"
                value={matPrima}
              />
            </FormGroup>
            <FormGroup>
              <Label>Forma</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="forma"
                value={forma}
              />
            </FormGroup>
            <FormGroup>
              <Label>Despacho</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="despacho"
                value={despacho}
              />
            </FormGroup>
            <FormGroup>
              <Label>Grupo</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="grupo"
                value={grupo}
              />
            </FormGroup>
            <FormGroup>
              <Label>Nominal</Label>
              <Input
                type="select"
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
              <Label>Deposito</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="deposito"
                value={deposito}
              />
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

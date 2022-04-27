import React, { useState } from "react";
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

const CargaPieza = () => {
  //usar reduce??

  const [form, setForm] = useState({
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

  //guardo la data
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

    //limpiar el form

    for (const key in form) {
      setForm({
        ...form,
        [key]: "",
      });
    }
  };
  console.log(form);

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
              <span className="font-weight-bold text-center">Cargar Pieza</span>
            </h1>
            <hr />
            <FormGroup>
              <Label>Codigo Cliente</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="codCliente"
                value={form.codCliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Descripción</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="descripcion"
                value={form.descripcion}
              />
            </FormGroup>
            <FormGroup>
              <Label>Peso</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="peso"
                value={form.peso}
              />
            </FormGroup>
            <FormGroup>
              <Label>Largo/Superficie</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="largoSup"
                value={form.largoSup}
              />
            </FormGroup>
            <FormGroup>
              <Label>Plano</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="plano"
                value={form.plano}
              />
            </FormGroup>
            <FormGroup>
              <Label>Revisión</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="revision"
                value={form.revision}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cliente</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="cliente"
                value={form.cliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Materia Prima</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="matPrima"
                value={form.matPrima}
              />
            </FormGroup>
            <FormGroup>
              <Label>Forma</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="forma"
                value={form.forma}
              />
            </FormGroup>
            <FormGroup>
              <Label>Despacho</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="despacho"
                value={form.despacho}
              />
            </FormGroup>
            <FormGroup>
              <Label>Grupo</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="grupo"
                value={form.grupo}
              />
            </FormGroup>
            <FormGroup>
              <Label>Nominal</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="nominal"
                value={form.nominal}
              />
            </FormGroup>
            <FormGroup>
              <Label>Conjunto</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="conjunto"
                value={form.conjunto}
              />
            </FormGroup>
            <FormGroup>
              <Label>Deposito</Label>
              <Input
                type="select"
                onChange={handleChange}
                name="deposito"
                value={form.deposito}
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
                  value={form.precio}
                />
              </InputGroup>
            </FormGroup>
            <div className="d-grid gap-2 col-6 mx-auto pt-2">
              <Button
                className="btn btn-block"
                onClick={handleSubmit}
                color="primary"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CargaPieza;

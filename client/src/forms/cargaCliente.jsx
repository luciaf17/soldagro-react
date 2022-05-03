import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

const CargaCliente = () => {
  //usar reduce??

  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    localidad: "",
    contacto: "",
    iva: "",
    cuit: "",
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
    console.log(form);
    handleReset(); 
  };
    //enviar el formdata
    //axios.post('http://localhost:3000/api/cargaPieza', formData);
    //body: JSON.stringify(formData); otra forma de enviar el formdata
    
  //limpiar el form
   const handleReset = () => {
        setForm({
            nombre: "",
            direccion: "",
            localidad: "",
            contacto: "",
            iva: "",
            cuit: "",
        });
        console.log(form);
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
              <span className="font-weight-bold text-center">Cargar Cliente</span>
            </h1>
            <hr />
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="nombre"
                value={form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <Label>Dirección</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="direccion"
                value={form.direccion}
              />
            </FormGroup>
            <FormGroup>
              <Label>Localidad</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="localidad"
                value={form.localidad}
              />
            </FormGroup>
            <FormGroup>
              <Label>Contacto</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="contacto"
                value={form.contacto}
              />
            </FormGroup>
            <FormGroup>
              <Label>Condición frente al IVA</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="iva"
                value={form.iva}
              />
            </FormGroup>
            <FormGroup>
              <Label>CUIT</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="cuit"
                value={form.cuit}
              />
            </FormGroup>
            <div className="d-grid gap-2 col-3 mx-auto pt-2">
              <Button
                className="btn btn-block"
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

export default CargaCliente;

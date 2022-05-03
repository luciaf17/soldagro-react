import React from "react";
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
import { useForm } from "../hooks/useForm";
//import axios from "axios";

const CargaCliente = () => {

  const [form, handleChange, handleReset] = useForm({
    nombre: "",
    direccion: "",
    localidad: "",
    contacto: "",
    iva: "",
    cuit: "",
  });

  const {nombre, direccion, localidad, contacto, iva, cuit } = form;
  
  //se envian los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    //preparar el formdata
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    handleReset();
    console.log(form);
    //enviar el formdata
    //axios.post('http://localhost:3000/api/cargaPieza', formData);
    //body: JSON.stringify(formData); otra forma de enviar el formdata
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
                value={nombre}
              />
            </FormGroup>
            <FormGroup>
              <Label>Dirección</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="direccion"
                value={direccion}
              />
            </FormGroup>
            <FormGroup>
              <Label>Localidad</Label>
              <Input
                type="textarea"
                onChange={handleChange}
                name="localidad"
                value={localidad}
              />
            </FormGroup>
            <FormGroup>
              <Label>Contacto</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="contacto"
                value={contacto}
              />
            </FormGroup>
            <FormGroup>
              <Label>Condición frente al IVA</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="iva"
                value={iva}
              />
            </FormGroup>
            <FormGroup>
              <Label>CUIT</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="cuit"
                value={cuit}
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

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

const CargaPedido = () => {
  //usar reduce??

  const [form, handleChange, handleReset] = useForm({
    fecha: "",
    fechaEntrega: "",
    ordenCompra: "",
    cliente: "",
    piezas: [],
    precio: "",
    cantidad: "",
    precioTotal: "",
    plano: "",
    revision: "",
  });

  const {fecha, fechaEntrega, ordenCompra, cliente, piezas, precio, cantidad, precioTotal, plano, revision } = form;
  
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
              <span className="font-weight-bold text-center">Cargar Pedido</span>
            </h1>
            <hr />
            <FormGroup>
              <Label>Fecha</Label>
              <Input
                type="date"
                onChange={handleChange}
                name="fecha"
                value={fecha}
              />
            </FormGroup>
            <FormGroup>
              <Label>Fecha de Entrega</Label>
              <Input
                type="date"
                onChange={handleChange}
                name="fechaEntrega"
                value={fechaEntrega}
              />
            </FormGroup>
            <FormGroup>
              <Label>Orden de Compra</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="ordenCompra"
                value={ordenCompra}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cliente</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="cliente"
                value={cliente}
              />
            </FormGroup>
            <FormGroup>
              <Label>Piezas</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="piezas"
                value={piezas}
              />
            </FormGroup>
            <FormGroup>
              <Label>Precio</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="precio"
                value={precio}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cantidad</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="cantidad"
                value={cantidad}
              />
            </FormGroup>
            <FormGroup>
              <Label>Precio Total</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="precioTotal"
                value={precioTotal}
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
              <Label>Revision</Label>
              <Input
                type="text"
                onChange={handleChange}
                name="revision"
                value={revision}
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

export default CargaPedido;

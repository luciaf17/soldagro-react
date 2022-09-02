import React from 'react'
import {
    Button,
    Container,
    Row,
    Col,
    Table,
    FormGroup,
    Input,
    Label,
    Form
   } from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import '../../css/styles.css';
import { productos } from './data/productos.js';
import axios from 'axios';

const ListaPiezas = () => {

    const [form, handleChange ,  , handleReset] = useForm({
        productoElegido: '',
       });

    const { productoElegido } = form;

       const handleSubmit = async (e) => {
        e.preventDefault();

        const listaElegida = { productoElegido };
      
        const res = await axios.get(`http://localhost:3001/api/${productoElegido}`, listaElegida, {
         headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
         },
        });
        console.log(listaElegida);
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
                    <FormGroup>
                        <Label>Seleccione la Lista: </Label>
                        <Input
                            type='select'
                            value={productoElegido}
                            onChange={handleChange}
                            name="productoElegido"
                            className='select'
                        >
                            <option disabled value=''></option>
                            {productos.map((producto) => (
                            <option
                            key={producto.id}
                            value={producto.nombre}
                            >
                            {producto.nombre}
                            </option>
                            ))}
                        </Input>
                    </FormGroup>
                  <Button className='btn-lista' color="primary" onClick={handleSubmit}>Ver Lista</Button>
                </Form>
                
            </Col>
        </Row>
    </Container>
  )
}

export default ListaPiezas

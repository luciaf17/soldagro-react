import React from 'react'
import {
    Container,
    Row,
    Col,
    Table,
   } from 'reactstrap';
import useGetData from '../../hooks/useGetData';
import '../../css/styles.css';

const ListaClientes = () => {


    const [clientes] = useGetData(
        'http://localhost:3001/api/clientes'
       );

  return (
    <Container fluid='fluid'>
        <Row>
            <Col
            md={{
            size: 12,
            }}
            sm='12'
            >
              <h1 className='title'>Clientes</h1>
                <Table striped responsive>
                    <thead>
                        <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Dirección
                        </th>
                        <th>
                            Localidad
                        </th>
                        <th>
                            Contacto
                        </th>
                        <th>
                            IVA
                        </th>
                        <th>
                            CUIT
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {clientes.map((cliente) => {
                        return (
                            <tr key={cliente.id}>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.localidad}</td>
                                <td>{cliente.contacto}</td>
                                <td>{cliente.iva}</td>
                                <td>{cliente.cuit}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default ListaClientes

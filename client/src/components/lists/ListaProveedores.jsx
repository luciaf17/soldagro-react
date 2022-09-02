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


    const [proveedores] = useGetData(
        'http://localhost:3001/api/proveedores'
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
              <h1 className='title'>Proveedores</h1>
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
                            CUIT
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {proveedores.map((proveedor) => {
                        return (
                            <tr key={proveedor.id}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.localidad}</td>
                                <td>{proveedor.contacto}</td>
                                <td>{proveedor.cuit}</td>
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

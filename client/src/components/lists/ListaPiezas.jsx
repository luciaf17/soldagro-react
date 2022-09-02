import React from 'react'
import {
    Container,
    Row,
    Col,
    Table,
   } from 'reactstrap';
import useGetData from '../../hooks/useGetData';
import '../../css/styles.css';

const ListaPiezas = () => {


    const [piezas] = useGetData(
        'http://localhost:3001/api/piezas'
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
              <h1 className='title'>Piezas</h1>
                <Table striped responsive>
                    <thead>
                        <tr>
                        <th>
                            Codigo Cliente
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Peso
                        </th>
                        <th>
                            Largo/Superficie
                        </th>
                        <th>
                            Plano
                        </th>
                        <th>
                            Revisión
                        </th>
                        <th>
                            Forma
                        </th>
                        <th>
                            Grupo
                        </th>
                        <th>
                            Nominal
                        </th>
                        <th>
                            Mat. Prima
                        </th>
                        <th>
                            Deposito
                        </th>
                        <th>
                            Cliente
                        </th>
                        <th>
                            Despacho
                        </th>
                        <th>
                            Precio
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {piezas.map((pieza) => {
                        return (
                            <tr key={pieza.id}>
                                <td>{pieza.codigo_cliente}</td>
                                <td>{pieza.nombre}</td>
                                <td>{pieza.peso}</td>
                                <td>{pieza.largo_superficie}</td>
                                <td>{pieza.plano}</td>
                                <td>{pieza.revision}</td>
                                <td>{pieza.forma}</td>
                                <td>{pieza.grupo}</td>
                                <td>{pieza.nominal}</td>
                                <td>{pieza.materia_prima}</td>
                                <td>{pieza.deposito}</td>
                                <td>{pieza.cliente}</td>
                                <td>{pieza.despacho}</td>
                                <td>{pieza.precio}</td>
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

export default ListaPiezas

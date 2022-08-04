import React from 'react';
import {
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 Container,
 Row,
 Col,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearMateriaPrima = () => {
 const [form, handleChange, , handleReset] = useForm({
  nominal: '',
  unidad_medida: '',
  forma: '',
  espesor: 0,
  material: '',
 });

 const { nominal, unidad_medida, forma, espesor, material } = form;

 const [materiales, isLoading, isError] = useGetData(
  'http://localhost:3001/api/materiales'
 );

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const materiaPrima = { nominal, unidad_medida, forma, espesor, material };

  const res = await axios.post(
   'http://localhost:3001/api/materiasprimas',
   materiaPrima,
   {
    headers: {
     Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
    },
   }
  );

  handleReset();
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
      <h1 className='text-center'>
       <span className='font-weight-bold text-center'>Crear Materia Prima</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Nominal</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='nominal'
        value={nominal}
       />
      </FormGroup>
      <FormGroup>
       <Label>Unidad Medida</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='unidad_medida'
        value={unidad_medida}
       />
      </FormGroup>
      <FormGroup>
       <Label>Forma</Label>
       <Input type='text' onChange={handleChange} name='forma' value={forma} />
      </FormGroup>
      <FormGroup>
       <Label>Espesor</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='espesor'
        value={espesor}
       />
      </FormGroup>
      <FormGroup>
       <Label>Material</Label>
       <Input
        type='select'
        value={material}
        onChange={handleChange}
        name='material_id'
       >
        <option disabled value=''></option>
        {materiales.map((material) => (
         <option key={material.material_id} value={material.material_id}>
          {material.codigo_material}
         </option>
        ))}
       </Input>
      </FormGroup>
      <div className='d-grid gap-2 col-3 mx-auto pt-2'>
       <Button
        className='btn btn-block'
        type='submit'
        onClick={handleSubmit}
        color='primary'
       >
        Guardar
       </Button>
       <Button
        className='btn btn-block'
        type='reset'
        onClick={handleReset}
        color='primary'
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

export default CrearMateriaPrima;

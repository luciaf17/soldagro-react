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
import Select from 'react-select';
import { useForm } from '../../hooks/useForm';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const CrearUsuario = () => {
 const [listaRoles, isLoading, isError] = useGetData(
  'http://localhost:3001/api/roles'
 );

 const [form, handleChange, handleChangeMultiple, handleReset] = useForm({
  username: '',
  password: '',
  roles: [],
 });

 const { username, password, roles } = form;

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

  const nuevoUsuario = {
   username,
   password,
   roles,
  };

  const res = await axios.post(
   'http://localhost:3001/api/usuarios',
   nuevoUsuario,
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
       <span className='font-weight-bold text-center'>Crear Usuario</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Usuario</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='username'
        value={username}
       />
      </FormGroup>
      <FormGroup>
       <Label>Password</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='password'
        value={password}
       />
      </FormGroup>
      <FormGroup>
       <Label>Rol</Label>
       <Select
        isMulti
        name='roles'
        options={listaRoles.map((rol) => {
         return { value: rol.rol_id, label: rol.nombre };
        })}
        value={roles}
        onChange={handleChangeMultiple}
        className='basic-multi-select'
        classNamePrefix='select'
       />
       {/* <Input
        type='select'
        defaultValue={'DEFAULT'}
        onChange={handleChange}
        name='rol'
       >
        <option disabled value={'DEFAULT'}></option>
        {listaRoles.map((rol) => (
         <option key={rol.rol_id} value={rol.rol_id}>
          {rol.nombre}
         </option>
        ))}
       </Input> */}
      </FormGroup>
      <div className='d-grid gap-2 col-3 mx-auto pt-2'>
       <Button
        className='btn btn-block'
        onClick={handleSubmit}
        type='submit'
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

export default CrearUsuario;

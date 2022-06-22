import React, { useContext } from 'react';
import {
 Nav,
 NavItem,
 NavLink,
 Navbar,
 UncontrolledDropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem,
 Button,
} from 'reactstrap';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import { NavLink as RRNavLink } from 'react-router-dom';

const Navigationbar = () => {
 const { dispatch } = useContext(AuthContext);

 const logout = () => {
  dispatch({
   type: types.LOGOUT,
  });
 };

 return (
  <div>
   <Navbar color='dark' container='true' dark expand='md' fixed='end' light>
    <Nav navbar>
     <NavItem>
      <NavLink activeclassname='active' tag={RRNavLink} to='/'>
       Home
      </NavLink>
     </NavItem>
     <NavItem>
      <NavLink>Pendientes</NavLink>
     </NavItem>
     <NavItem>
      <NavLink>Entregas</NavLink>
     </NavItem>
     <NavItem>
      <NavLink>Buscar</NavLink>
     </NavItem>
     <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
       Crear
      </DropdownToggle>
      <DropdownMenu end>
       <DropdownItem activeclassname='active' tag={RRNavLink} to='/CrearPieza'>
        Crear Pieza
       </DropdownItem>
       <DropdownItem
        activeclassname='active'
        tag={RRNavLink}
        to='/CrearCliente'
       >
        Crear Cliente
       </DropdownItem>
       <DropdownItem activeclassname='active' tag={RRNavLink} to='/CrearPuesto'>
        Crear Puesto
       </DropdownItem>
       <DropdownItem
        activeclassname='active'
        tag={RRNavLink}
        to='/CrearUsuario'
       >
        Crear Usuario
       </DropdownItem>
       <DropdownItem activeclassname='active' tag={RRNavLink} to='/CrearRol'>
        Crear Rol
       </DropdownItem>
       <DropdownItem
        activeclassname='active'
        tag={RRNavLink}
        to='/CrearContenedor'
       >
        Crear Contenedor
       </DropdownItem>
      </DropdownMenu>
     </UncontrolledDropdown>
     <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
       Listas
      </DropdownToggle>
      <DropdownMenu end>
       <DropdownItem>Piezas</DropdownItem>
       <DropdownItem>Clientes</DropdownItem>
       <DropdownItem>Proveedores</DropdownItem>
      </DropdownMenu>
     </UncontrolledDropdown>
     <NavItem>
      <Button onClick={logout}>Cerrar Sesión</Button>
     </NavItem>
    </Nav>
   </Navbar>
  </div>
 );
};

export default Navigationbar;

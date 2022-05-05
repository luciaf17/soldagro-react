import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <Navbar color="dark" container="true" dark expand="md" fixed="end" light>
        <Nav navbar>
        <NavItem>
            <NavLink activeclassname="active" tag={RRNavLink} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
              Pendientes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
              Entregas
            </NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Crear
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem activeclassname="active" tag={RRNavLink} to="/CargaPieza" >
                Carga Pieza
              </DropdownItem>
              <DropdownItem activeclassname="active" tag={RRNavLink} to="/CargaCliente" >
                Carga Cliente
              </DropdownItem>
              <DropdownItem activeclassname="active" tag={RRNavLink} to="/CargaPuesto" >
                Carga Puesto
              </DropdownItem>
              <DropdownItem activeclassname="active" tag={RRNavLink} to="/CargaUsuario" >
                Carga Usuario
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
            <NavLink activeclassname="active" tag={RRNavLink} to="/login">Salir </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

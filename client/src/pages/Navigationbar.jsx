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

const Navigationbar = () => {
  return (
    <div>
      <Navbar
        color="dark"
        container="true"
        dark
        expand="md"
        fixed="end"
        light
      >
        <Nav navbar>
          <NavItem>
            <NavLink href="">Pendientes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Entregas</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Crear
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Carga Pieza</DropdownItem>
              <DropdownItem>Carga Cliente</DropdownItem>
              <DropdownItem>Carga Proveedor</DropdownItem>
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
            <NavLink href="/components/">Salir </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

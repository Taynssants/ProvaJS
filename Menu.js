import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

function Menu(){
    return (
        <Container>
    <NavLink to = {'criaProduto'}> Cria Produto</NavLink>
    <NavLink to = {'produtos'}> Produtos</NavLink>
    <NavLink to= {'selecionado'}> Selecionado</NavLink>
        </Container>




    )
}


export default Menu;

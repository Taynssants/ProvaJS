import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../views/Card';
import { removerProduto, adicionarProduto } from '../redux/action';
import { Button } from 'react-bootstrap';

const Selecionados = ({ selecionados }) => {
    return (
      <div>
        <h1>Produtos Selecionados</h1>
        <ul>
          {selecionados.length > 0 ? (
            selecionados.map((produto) => (
              <li key={produto.id}>{produto.nome}</li>
            ))
          ) : (
            <li>Nenhum produto selecionado</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default Selecionados;

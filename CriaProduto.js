import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import produtoService from '../services/ProdutoService'; // Certifique-se de que esse serviço está definido
import { adicionarProduto } from '../redux/action';

const CriaProduto = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome.trim()) {
            const novoProduto = {
                id: Math.random().toString(), // Alterado para garantir que o id seja uma string
                nome,
                preco: parseFloat(preco), // Converter preço para número
                imagem,
            };

            // Aqui você pode chamar o serviço se necessário
            await produtoService.addProduto(novoProduto); // Chamada ao serviço se necessário

            // Dispatch da ação para adicionar o produto ao Redux
            dispatch(adicionarProduto(novoProduto));

            // Limpar os campos após o envio
            setId('');
            setNome('');
            setPreco('');
            setImagem('');
        }
    };

    return (
        <div>
            <h1>Criar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    placeholder="Id" 
                />
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    placeholder="Nome" 
                />
                <input 
                    type="number" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                    placeholder="Preço" 
                />
                <input 
                    type="text" 
                    value={imagem} 
                    onChange={(e) => setImagem(e.target.value)} 
                    placeholder="Imagem" 
                />
                
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default CriaProduto;

import React from 'react';
import Register from './register.jsx';
import Home from './home.jsx';
// import './product-register.css';
import '../estilos/home.css';
import '../estilos/containers.css';

const ProductRegister = () => {
  return (
    <>
      <div className="container" >
        <div className="titleText" className="left-container">
          <Home title="Deseja mudar sua opção de escolha?" />
        </div>
        <div>
          <Register name0="Cadastre seu produto!" name1="Produto" name2="Categoria" name3="Quantidade" name4="Especificações" />
        </div>
      </div>
    </>
  );
}

export default ProductRegister;
import React from 'react';
import Register from './register.jsx';
import Home from './home.jsx';
import '../estilos/register.css';
import '../estilos/home.css';
import '../estilos/containers.css';

const ClientRegister = () => {
  return (
    <>
      <div className="container">
        <div className="titleText" className="left-container" >
          <Home title="Deseja mudar sua opção de escolha?" />
        </div>
        <div>
          <Register name0="Cadastre-se aqui!" name1="Usuário" name2="Email" name3="CPF" name4="Endereço" />
        </div>
      </div>
    </>
  );
}

export default ClientRegister;
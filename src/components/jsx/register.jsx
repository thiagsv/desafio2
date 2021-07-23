import React, {useState} from 'react';
import '../estilos/register.css';
import { Link } from 'react-router-dom';
import '../estilos/home.css'


const Register = (props) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  function handleClick(){
    const data = [first, second, third, fourth];
    localStorage.setItem('data', JSON.stringify(data));
    alert('Cadastro realizado com sucesso!')
}
  return (
    <>
        <div className="containerReg">
            <div className="box0"> 
            <div className="divTitle"> 
                    <h1 className="boxTitle">{props.name0}</h1>
            </div>
            <div className="box">
                    <label className="label">{props.name1}</label>
                    <input  value={first} placeholder={props.name1} className="input" onChange={e => setFirst(e.target.value)}/>
                    
                    <label className="label">{props.name2}</label>
                    <input value={second} placeholder={props.name2} className="input" onChange={e => setSecond(e.target.value)}/>
                    
                    <label className="label">{props.name3}</label>
                    <input value={third} placeholder={props.name3} className="input" onChange={e => setThird(e.target.value)}/>
                    
                    <label className="label">{props.name4}</label>
                    <input value={fourth} placeholder={props.name4} className="input" onChange={e => setFourth(e.target.value)}/>
                <div className="Button">
                    <button type="submit" className="buttonReg" onClick={handleClick} >Enviar</button>
                </div>
                <div className="buttonback">
                    <button className="hide"><Link to="/" className="backButton">Voltar</Link></button>
                </div>
            </div>

            </div>
        </div>
    </>
  );
}

export default Register;
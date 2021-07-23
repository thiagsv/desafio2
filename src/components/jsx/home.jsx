import React from 'react';
import '../estilos/home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='margin'>
        <div className="title">
            <div>
                <h1 className="titleText">{props.title}</h1>
            </div>
            <div className="buttonBox">
                <div>
                    <button className="hide"><Link to='/client' className="button">Cliente</Link></button>
                </div>
                <div>
                    <button className="hide"><Link to='/product' className="button">Produto</Link></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;

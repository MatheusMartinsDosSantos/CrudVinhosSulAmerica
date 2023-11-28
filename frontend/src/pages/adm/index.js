import './adm.scss'
import { Link } from 'react-router-dom'
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

const ADM = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
            <div>
              <div className="TV2">
                <div className="group-wrapper2">
                  <div className="group2">
                    <div className="overlap2">
                      <div className="rectangle2" />
                      <img className="image2" src="/img/image-26.png" />
                      <div className="div2" />
                      <div className="rectangle-22" />
                      <div className="rectangle-32" />
                      <div className="rectangle-42" />
                      <div className="consultar-produto2">Consultar <br />Produto</div>
                      <div className="bem-vindo2">Bem-Vindo <br />Administrador!</div>
                      <div className="cadastrar-produto2">Cadastrar<br />Produto</div>
                      <img className="img2" src="/img/line-15.svg" />
                      <Link to='/Cadastro'><div className="rectangle-52" /></Link>
                      <Link to='/Consulta'><div className="rectangle-62" /></Link>
                      <Link to='/Cadastro'><div className="text-wrapper2">Entrar</div></Link>
                      <Link to='/Consulta'><div className="text-wrapper-22">Entrar</div></Link>
                      <img className="image-22" src="/img/image-29.png" />
                      <div className="overlap-group-wrapper2">
                        <div className="overlap-group2">
                        <Link to='/'><a className="text-wrapper-32" href="/index.html">Sair</a></Link>
                        </div>
                      </div>
                      <img className="image-32" src="/img/image-24.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      
export default ADM;
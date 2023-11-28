import './login.scss'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
    <div>
        <div className="TV1">
        <div className="group-wrapper1">
          <div className="group1">
            <div className="overlap1">
              <div className="div1" />
              <img className="image1" src="/img/image-27.png" />
              <div className="rectangle1" />
              <div className="text-wrapper1">Login</div>
              <div className="overlap-group-wrapper1">
              <Link to='/'><div className="overlap-group1"><div className="text-wrapper-21">Sair</div></div></Link>
              </div>
              <div className="rectangle-21" />
            </div>
            <div className="group-21">
              <form id="loginForm">
                <input type="email" id="email" placeholder="E-mail" required />
                <input type="password" id="senha" placeholder="Senha" required />
                <Link to='/Adm'><button type="submit">Entrar</button></Link>
              </form>
            </div>
            <img className="img1" src="/img/image-28.png" />
            <div className="group-41">
              <div className="overlap-21">
                <div className="rectangle-41" />
                <img className="image-21" src="/img/image-24.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
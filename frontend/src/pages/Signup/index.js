import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/signin");
  };

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
            <C.Container>
      <C.Label></C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
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
};

export default Signup;

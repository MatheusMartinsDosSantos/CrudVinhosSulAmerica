import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ADM from "../pages/adm";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from '../pages/home';
import Consulta from '../pages/consulta';
import Cadastro from '../pages/cadastro';
import Login from "../pages/login";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/Adm" element={<Private Item={ADM} />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />}/>
          <Route path='/Consulta' element={<Private Item={Consulta} />}/>
          <Route path='/Cadastro' element={<Private Item={Cadastro} />}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

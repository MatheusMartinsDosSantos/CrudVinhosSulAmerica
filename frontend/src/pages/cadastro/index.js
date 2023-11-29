import './cad.scss'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Form from "../../components/Form.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default function Cadastro() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://20.195.166.255:5000/");
      setUsers(res.data.sort((a, b) => (a.nm_vinho > b.nm_vinho ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <div>
      <div className="TV4">
        <div className="group-wrapper4">
          <div className="group4">
            <div className="overlap4">
              <div className="rectangle4" />
              <div className="text-wrapper4">Cadastro</div>
              <img className="image4" src="/img/image-24.png" />
            </div>
            <div className="overlap-group4">
              <div className="div4" />
              <div className="rectangle-24" />
              <div className="overlap-group-wrapper4">
                <div className="div-wrapper4">
                <Link to='/Adm'><a className="text-wrapper-24" href="/indexadm.html">Sair</a></Link>
                </div>
              </div>
              <div className="group-24">
              <Container>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
              </Container>
              </div>
            </div>
            <img className="line-44" src="/img/line-16.svg" />
            <img className="line-54" src="/img/line-17.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
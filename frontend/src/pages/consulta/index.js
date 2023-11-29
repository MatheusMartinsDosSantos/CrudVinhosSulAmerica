import './cons.scss'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Grid from "../../components/Grid.js";
import Edit from "../../components/Edit.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 1197px;
  margin-top: 20px;
  margin-left: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;

export default function Consulta() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://20.195.166.255:5000");
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
        <div className="TV3">
          <div className="div3">
            <div className="div23">
              <div className="Bloco">
            <Container>
              <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
            </Container>
               </div>
            <div className="Bloco2">
            <Container>
                <Edit onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            </Container>
            </div>
            </div>
            <div className="rectangle-23" />
            <div className="rectangle-226" />
            <div className="text-wrapper3">Consulta</div>
            <img className="image3" src="/img/image-24.png" />
            <div className="overlap-group-wrapper4">
                <div className="div-wrapper4">
                <Link to='/Adm'><a className="text-wrapper-24" href="/indexadm.html">Sair</a></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
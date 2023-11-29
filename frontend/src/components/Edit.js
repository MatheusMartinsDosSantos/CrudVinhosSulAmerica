import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const EditContainer = styled.form`
display: flex;
width: 277px;
align-items: center;
gap: 49px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #E94361;
color: white;
height: 42px;
width: 190px;
left: 1px;
`;

const Edit = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nm_vinho.value = onEdit.nm_vinho;
      user.ps_vinho.value = onEdit.ps_vinho;
      user.pr_vinho.value = onEdit.pr_vinho;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (onEdit) {
      await axios
        .put("http://20.195.166.255:8800/" + onEdit.id, {
          nm_vinho: user.nm_vinho.value,
          ps_vinho: user.ps_vinho.value,
          pr_vinho: user.pr_vinho.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } 
    user.nm_vinho.value = "";
    user.ps_vinho.value = "";
    user.pr_vinho.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <EditContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nm_vinho" />
      </InputArea>
      <InputArea>
        <Label>Pais</Label>
        <Input name="ps_vinho" />
      </InputArea>
      <InputArea>
        <Label>Preco</Label>
        <Input name="pr_vinho" type="number" step="0.01"/>
      </InputArea>

      <Button type="submit">Alterar</Button>
    </EditContainer>
  );
};

export default Edit;
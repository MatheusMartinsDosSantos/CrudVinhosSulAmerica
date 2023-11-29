import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_vinho";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO tb_vinho(`nm_vinho`, `ps_vinho`, `pr_vinho`) VALUES(?)";
  
    const values = [
      req.body.nm_vinho,
      req.body.ps_vinho,
      req.body.pr_vinho,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vinho criado com sucesso.");
    });
  };
  
  export const updateUser = (req, res) => {
    const q =
      "UPDATE tb_vinho SET `nm_vinho` = ?, `ps_vinho` = ?, `pr_vinho` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nm_vinho,
      req.body.ps_vinho,
      req.body.pr_vinho,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vinho atualizado com sucesso.");
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM tb_vinho WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vinho deletado com sucesso.");
    });
  };
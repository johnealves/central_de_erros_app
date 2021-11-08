import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import "../Css/dashboard.css";
import { Box } from "@material-ui/system";

const FormNewRegister = () => {
  return(
    <div className="form-container">
      <Box className="form-new-regiser" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
        <TextField
          name="level"
          label="Level"
          variant="outlined"
        />
        <TextField
          name="log"
          label="Log"
          variant="outlined"
        />
        <TextField
          name="origem"
          label="Origem"
          variant="outlined"
        />
        <TextField
          name="quantity"
          label="Quantidade"
          type="number"
          variant="outlined"
        />
        <TextField
          name="data"
          type="date"
          variant="outlined"
        />
      </Box>
      <TextField
        name="description"
        label="Descrição"
        className="description-container"
        variant="outlined"
        sx={{ m: 2, width: 800 }}
      />
      <Button style={{ backgroundColor: "#ed1940" }} variant="contained">
        Adicionar
      </Button>
    </div>
  )
}

export default FormNewRegister;

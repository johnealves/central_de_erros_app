import { MenuItem, Select, TextField, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ErrorCenterContext from "../Context/ErroCenterContext";

const ListFilter = () => {
  const [filterValue, setFilterValue] = useState("Filtros")
  const [text, setText] = useState("");
  const { filterEvents } = useContext(ErrorCenterContext);

  const handleFilter = ({ target: { value } }) => setFilterValue(value);
  const handleText = ({ target: { value } }) => setText(value);

  const handleSetFilter = () => {
    filterEvents(filterValue, text);
  }

  return (
    <div className="filter-container">
      <Select value={ filterValue } onChange={ handleFilter } sx={{ m: 0.5 }}>
        <MenuItem value="Filtros" >Filtros</MenuItem>
        <MenuItem value="ID">ID</MenuItem>
        <MenuItem value="Level">Level</MenuItem>
        <MenuItem value="Descrição">Descrição</MenuItem>
        <MenuItem value="Log do evento">Log do Evento</MenuItem>
        <MenuItem value="Origem">Origem</MenuItem>
        <MenuItem value="Data">Data</MenuItem>
        <MenuItem value="Quantidade">Quantidade</MenuItem>
      </Select>
      <TextField 
        name="filter"
        variant="outlined"
        onChange={ handleText }
        sx={{ m: 0.5 }}
      />
      <Button onClick={ handleSetFilter } variant="contained" sx={{ backgroundColor: "#ED1941", height: 55 }}>
        Buscar
      </Button>
    </div>
  )
}

export default ListFilter;
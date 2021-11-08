import React, { useContext, useEffect, useState } from "react";
// import events from "../mockrequest/events.json"
import { DataGrid } from '@mui/x-data-grid';
import ListFilter from "./ListFilter";
import ErrorCenterContext from "../Context/ErroCenterContext";

const ErrorList = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const { events } = useContext(ErrorCenterContext);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setRows(events)
      setLoading(false)
    }, Math.random() * 5000)
  }, [events])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'level', headerName: 'Level', width: 130 },
    { field: 'origem', headerName: 'Origem', width: 160 },
    {
      field: 'quantity',
      headerName: 'Qty',
      type: 'number',
      width: 110,
    },
    { field: 'description', headerName: 'Description', width: 1500, sortable: false },
  ];

  

  return(
    <div className="error-list-container" style={{ height: 600, width: '100%' }}>
      <h1>Registros</h1>
      <ListFilter />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // paginationMode="server"
        loading={ loading }
        // sx={{ height: "50rem" }}
      />
    </div>
  )
}

export default ErrorList;
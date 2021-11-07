import React from "react";
import events from "../mockrequest/events.json"
import { DataGrid } from '@mui/x-data-grid';

const ErrorList = () => {
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
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
  ];

  const rows = events;

  return(
    <div className="error-list-container" style={{ height: 600, width: '100%' }}>
      <h1>Registros</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        // sx={{ height: "50rem" }}
      />
    </div>
  )
}

export default ErrorList;
import React from 'react'
import BasicTable from "../utils/Table/BasicTable";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

 
const columns = [
    { Header: "Sr #", accessor: "id" },

    {
      Header: "Answer",
      accessor: "answer",
    },
    {
      Header: "Sender Email",
      accessor: "email",
     
    },
    
    {
      Header: "Rating",
      accessor: "rating",
    },

   
  ];
const DashboardTable = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 ,maxWidth:"30%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
 <BasicTable
        edit={(id) => {
        //   setEditId(id);
        //   setEditDialog(true);
        }}
        remove="deleteData"
        columns={columns}
        data={[]}
        
      />
    </div>
  )
}

export default DashboardTable






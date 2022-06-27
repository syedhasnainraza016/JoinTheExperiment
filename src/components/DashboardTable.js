import React from 'react'
import BasicTable from "../utils/Table/BasicTable";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { getAnswers} from "../redux/actions/questionActions";
const columns = [
   

    {
      Header: "Answer",
      accessor: "answer",
    },
    {
      Header: "Sender Email",
      accessor: "userEmail",
     
    },
    
    {
      Header: "Rating",
      accessor: "rating",
    },

   
  ];
const DashboardTable = () => {
  const [age, setAge] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // console.log(event.target.value,"event.target.value")
    setAge(event.target.value);
    dispatch(getAnswers(event.target.value))
  };
  const questions = useSelector((state) => state.addQuestion.questions);
  const answers = useSelector((state) => state.getAnswers.answers);
  // console.log(questions,"asdfghjklkjhgfds")
  return (
    <div>
      <Box sx={{ minWidth: 120 ,maxWidth:"30%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Questions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Question"
          onChange={handleChange}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {questions?.map((item, index) => {
                        return <MenuItem value={item._id}>{item.question}</MenuItem>;
                      })}
        </Select>
      </FormControl>
    </Box>
 <BasicTable
        // edit={(id) => {
        // //   setEditId(id);
        // //   setEditDialog(true);
        // }}
        // remove="deleteData"
        counter={true}
        columns={columns}
        data={answers??[]}
        
      />
    </div>
  )
}

export default DashboardTable






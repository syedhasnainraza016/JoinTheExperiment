import React,{ useEffect, useState} from 'react'
import Paper from '@mui/material/Paper';
import { Typography ,TextareaAutosize,Box,Button} from '@mui/material';
import { getQuestionById,createAnswer} from "../../redux/actions/questionActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,useParams} from "react-router-dom";
const userInformation = JSON.parse(localStorage.getItem("userInformation"));
const UserAnswer = () => {
    const [answer, setAnswer] = useState("");
    // console.log("userInformation",userInformation.questionId)
    let navigate=useNavigate()
    const dispatch = useDispatch();
  
    useEffect(() => {
        
      dispatch(getQuestionById(userInformation?.questionId))
     
    },[])

    const SubmitHandler=(e)=>{
        e.preventDefault();
        userInformation.answer=answer
    dispatch(createAnswer(userInformation))
     navigate("/question/all-answer")
    }
    const questions = useSelector((state) => state.addQuestion.questions);
    // console.log("questionssssssssssssssss",questions)
  return (
    <Box component="form" sx={{display: "flex",alignItems:"center",justifyContent:"center",height:"100vh"}} onSubmit={SubmitHandler} >
 <Paper sx={{width:"60%",height:"500px"}} elevation={3} >
   <Box py={4} px={3} sx={{textAlign:"left"}}>
    <Typography  variant="h4">Question:</Typography>
    <Typography variant="h5">{questions?.question}</Typography>
   </Box  >
   <Typography px={3} sx={{textAlign:"left"}} variant="h4">Your Answer</Typography>
   <Box px={3} sx={{textAlign:"left"}} >
   <TextareaAutosize

aria-label="minimum height"
minRows={3}
placeholder="Type Your Answer"
value={answer}
onChange={(e) => setAnswer(e.target.value)}
style={{ width: "80%" ,textAlign:"left"}}
/>
   </Box>
   <Box mt={4} px={3} sx={{textAlign:"left"}}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
 </Paper>
    </Box>
  )
}

export default UserAnswer
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Typography, TextareaAutosize, Box, Button } from "@mui/material";
import {
  getQuestionById,
  createAnswer,
  checkAnswer
} from "../../redux/actions/questionActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const UserAnswer = () => {
  const [answer, setAnswer] = useState("");
  const[adminQuestion,setAdminQuestion]=useState(null);
  const [checkanswer, setCheckAnswer] = useState("");

  // console.log("userInformation",userInformation.questionId)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let userInformation;
  // useEffect(() => {
  //   userInformation = JSON.parse(localStorage.getItem("userInformation"));
  //   console.log("userInformation", userInformation);
  //   dispatch(getQuestionById(userInformation?.questionId)).then((res)=>setAdminQuestion(res?.payload?.question));
  // }, []);

  useEffect(() => {
    userInformation = JSON.parse(localStorage.getItem("userInformation"));
    console.log("userInformation", userInformation);
    dispatch(checkAnswer(userInformation)).then((res)=>{
      
      if(res.status == false){
        userInformation = JSON.parse(localStorage.getItem("userInformation"));
        console.log("userInformation", userInformation);
        dispatch(getQuestionById(userInformation?.questionId)).then((res)=>setAdminQuestion(res?.payload?.question));
      }
      else{
        setCheckAnswer(res.status)
      }
    });
  }, []);

  const SubmitHandler = (e) => {
    console.log("answer", answer);
    userInformation = JSON.parse(localStorage.getItem("userInformation"));
    e.preventDefault();
    userInformation.answer = answer;
    dispatch(createAnswer(userInformation));
    navigate("/question/all-answer");
  };
  const questions = useSelector((state) => state.addQuestion.questions);
  console.log("questionssssssssssssssss",questions)
  return (
    <>
    {
      checkanswer == true ?  <Typography
      variant="h3"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      Already Answered
    </Typography> : 
      questions.status==0?

      <Typography
      variant="h3"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      Question is Private
    </Typography>:
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      onSubmit={SubmitHandler}
    >
      <Paper
        sx={{
          width: "50%",
          height: "400px",
          border: "2px solid gray",
          borderRadius: "14px",
        }}
        elevation={3}
      >
        <Box py={4} px={3} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontFamily: "sans-serif" }}>
            Question:
          </Typography>
          <Typography variant="h5">{adminQuestion}</Typography>
        </Box>
        {/* <Typography px={3} sx={{ textAlign: "left" }} variant="h4">
          Your Answer
        </Typography> */}
        <Box px={3} sx={{ textAlign: "left" }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Type Your Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{
              width: "95%",
              textAlign: "left",
              borderRadius: "10px",
              padding: "20px",
            }}
          />
        </Box>
        <Box mt={4} px={3} sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
    }
    </>
  );
};

export default UserAnswer;

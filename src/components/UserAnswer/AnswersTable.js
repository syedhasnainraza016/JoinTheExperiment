import { Button, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers, rateAnswer,ratingRecord } from "../../redux/actions/questionActions";
import BasicTable from "../../utils/Table/BasicTable";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
let userInformation 
// let link = JSON.parse(localStorage.getItem("userInformation"))

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },

  {
    Header: "Answer",
    accessor: "answer",
  },

  // {
  //   Header: "Rating",
  //   accessor: "rating",
  // },
];
const AnswersTable = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const [record, setRecord] = useState(null);
  let navigate = useNavigate();

 
  useEffect(() => {
    userInformation = JSON.parse(localStorage.getItem("userInformation"));
    dispatch(getAnswers(userInformation?.questionId)).then((res)=>setUserAnswer(res.payload))
  }, []);
  useEffect(() => {
    dispatch(ratingRecord( userInformation)).then((res) => res.length > 0 ? setRecord(res[0]) : setRecord(null) )
  },[])
  const answers = useSelector((state) => state.getAnswers.answers);
 console.log("userAnswer", userAnswer)
 let data={userInformation,id}
  return (
    <div>
   {
    record ?    <Typography
    variant="h3"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
   Rating Already Submited 
  </Typography> :

      <Container>
        { userAnswer?.length >= 10 ? (
          <Box>
            <BasicTable
              // edit={(id) => {
              // //   setEditId(id);
              // //   setEditDialog(true);
              // }}
              // remove="deleteData"
              checkbox={(answerid) => {
                if (!id?.includes(answerid)) {
                  setId((item) => [...item, answerid]);
                }
              }}
              counter={true}
              columns={columns}
              data={userAnswer ?? []}
            />
            <Button
            mb={4}
              variant="contained"
              onClick={() =>
                id?.length == 3 ? (
                  <>
                    {dispatch(rateAnswer(data))}
                   
                    {navigate(`/question/${userInformation.questionId}`)}
                   
                    {toast("Thank You")}
                  </>
                ) : (
                  toast("Please select only 3 answers")
                )
              }
            >
              Submit
            </Button>
          </Box>
        ) : (
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            Een momentje a.u.b., de anderen zijn nog bezig...
          </Typography>
        )}
      </Container> 
      
      }
    </div>
  );
};

export default AnswersTable;

import { Button, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers, rateAnswer } from "../../redux/actions/questionActions";
import BasicTable from "../../utils/Table/BasicTable";
import { useNavigate, useParams } from "react-router-dom";
const userInformation = JSON.parse(localStorage.getItem("userInformation"));

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
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getAnswers(userInformation?.questionId));
  }, []);
  const answers = useSelector((state) => state.getAnswers.answers);
  return (
    <div>
      <Container>
        {answers?.length == 10 ? (
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
              data={answers ?? []}
            />
            <Button
              variant="contained"
              onClick={() =>
                id?.length == 3 ? (
                  <>
                    {dispatch(rateAnswer(id))}
                    {navigate("/thankyou")}
                  </>
                ) : (
                  alert("Please select only 3 answers")
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
            Wait while other answersing...
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default AnswersTable;

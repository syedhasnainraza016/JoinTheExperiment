import React, { useState, useEffect } from "react";
import BasicTable from "../../utils/Table/BasicTable";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BasicModal from "./AddQuestion";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  deleteQuestion,
} from "../../redux/actions/questionActions";
import EditQuestion from "./EditQuestion";

const QuestionTable = () => {
  const [data, setData] = React.useState([]);
  const [editDialog, setEditDialog] = useState(false);
  const [editId, setEditId] = useState();

  const [createDialog, setCreateDialog] = useState(false);

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.addQuestion.questions);

  const columns = [
    {
      Header: "Id",
      accessor: "_id",
    },
    {
      Header: "Question",
      accessor: "question",
    },
    {
      Header: "Link",
      accessor: "link",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => <span>{value == 1 ? "Public" : "Private"}</span>,
    },
  ];
  const deleteData = (id) => {
    dispatch(deleteQuestion(id)).then((res) => dispatch(getQuestions()));
  };

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => setCreateDialog(true)} variant="contained">
          Add Question
        </Button>
      </Box>

      <BasicTable
        edit={(id) => {
          setEditId(id);
          setEditDialog(true);
        }}
        remove={deleteData}
        counter={true}
        columns={columns}
        data={questions ?? []}
      />
      <BasicModal open={createDialog} onClose={() => setCreateDialog(false)} />
      <EditQuestion
        onClose={() => {
          setEditDialog(false);
        }}
        open={editDialog}
        initialData={questions?.find((item) => item._id === editId)}
      />
    </div>
  );
};

export default QuestionTable;

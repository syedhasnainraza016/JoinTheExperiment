import React, { useState, useEffect } from "react";
import BasicTable from "../../utils/Table/BasicTable";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BasicModal from "./AddTranslation";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTranslation,deleteTranslation } from "../../redux/actions/translationActions";
import EditQuestion from "./EditTranslation";

const Translation = () => {
 
  const [data, setData] = React.useState([]);
  const [editDialog, setEditDialog] = useState(false);
  const [editId, setEditId] = useState();


  const [createDialog, setCreateDialog] = useState(false);
  
  const dispatch = useDispatch();
  const translations = useSelector((state) => state.addTranslation.translation);
console.log(translations,"translations")
  const columns = [
    {
      Header: "Id",
      accessor: "_id",
    },
    {
      Header: "Text",
      accessor: "text",
    },
    {
      Header: "Translate",
      accessor: "translate",
    },
    {
      Header: "Language",
      accessor: "language",
    },
  ];
  const deleteData = (id) => {
  
    dispatch(deleteTranslation(id)).then((res)=>dispatch(getTranslation()))
  };
  
  useEffect(() => {
    dispatch(getTranslation());
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
          Translation Question
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
        data={translations??[]}
      />
      <BasicModal open={createDialog} onClose={() => setCreateDialog(false)}  />
      <EditQuestion onClose={() => {
          setEditDialog(false);
        }}
        open={editDialog}
        initialData={translations?.find((item) => item._id=== editId)}
        />
    </div>
  );
};

export default Translation;

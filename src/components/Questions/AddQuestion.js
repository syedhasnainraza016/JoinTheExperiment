import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Card } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuestion,
  getQuestions,
} from "../../redux/actions/questionActions";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose }) {
  const [age, setAge] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const initialValues = {
    question: "",
    status: "",
  };
  const validationSchema = yup.object().shape({
    question: yup.string().required("Question is required."),
    status: yup.string().required("Status is required."),
  });
  const onSubmit = (values, { resetForm }) => {
    // alert(JSON.stringify(values, null, 2));
    
    dispatch(createQuestion(values)).then((res) => dispatch(getQuestions()));
    //  navigate("/admin/question")
    dispatch(getQuestions());
    resetForm();
    onClose();
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
          <Card sx={{ background: "#1976d2" }}>
            <Typography
              sx={{ color: "white" }}
              fontWeight={"bold"}
              py={2}
              px={2}
              variant="h5"
            >
              Add Question{" "}
            </Typography>
          </Card>
          <Card sx={{ my: 3 }}>
            <Box py={4} px={2}>
              <Typography variant="h5">Question Statement</Typography>
              <TextareaAutosize
                name="question"
                formik={formik}
                value={formik.values.question}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.question && Boolean(formik.errors.question)
                }
                // helperText={formik.touched.question && formik.errors.question}
                aria-label="minimum height"
                minRows={5}
                placeholder="Type Question"
                fullWidth
                style={{
                  width: "100%",
                  paddingTop: "5px",
                  marginTop: "5px",
                  fontSize: "16px",
                  paddingLeft: "5px",
                }}
              />
              <Typography py={2} variant="h5">
                Select Status
              </Typography>
              <Box sx={{ minWidth: 120, maxWidth: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                    label="Age"
                    formik={formik}
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.status && Boolean(formik.errors.status)
                    }
                    // helperText={formik.touched.status && formik.errors.status}
                  >
                    <MenuItem value={0}>Private</MenuItem>
                    <MenuItem value={1}>Public</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={4}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                <Button
                  sx={{ marginLeft: "10px" }}
                  onClick={() => onClose()}
                  variant="contained"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

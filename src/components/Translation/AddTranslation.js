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
import { Card, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTranslation,getTranslation } from "../../redux/actions/translationActions";
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
 let navigate=useNavigate()

  const initialValues = {
    text: "",
    translate: "",
    language: "",
  };
  const validationSchema = yup.object().shape({
    text: yup.string().required("Text is required."),
    translate: yup.string().required("Translation is required."),
    language: yup.string().required("Status is required."),
  });
  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    dispatch(createTranslation(values))
  //  navigate("/admin/question")
    dispatch(getTranslation());
    resetForm()
    onClose()
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
              Add Translation{" "}
            </Typography>
          </Card>
          <Card sx={{ my: 3 }}>
            <Box py={4} px={2}>
              <Typography variant="h5">Text</Typography>
              <TextField id="outlined-basic" label="Text" variant="outlined"  name="text"
                formik={formik}
                fullWidth
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.text && Boolean(formik.errors.text)}/>
                 <Typography variant="h5">Translation</Typography>
                <TextField id="outlined-basic" label="Translation" variant="outlined"  name="translate"
                formik={formik}
                fullWidth
                value={formik.values.translate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.translate && Boolean(formik.errors.translate)}/>
             
              <Typography py={2} variant="h5">
                Select Language
              </Typography>
              <Box sx={{ minWidth: 120, maxWidth: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="language"
                    label="language"
                    formik={formik}
                    value={formik.values.language}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.language&& Boolean(formik.errors.language)
                    }
                    // helperText={formik.touched.language && formik.errors.language}
                  >
                    <MenuItem value={"dutch"}>Dutch</MenuItem>
                  
                  </Select>
                </FormControl>
              </Box>
              <Box mt={4}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

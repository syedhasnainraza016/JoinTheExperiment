import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { login,signup } from "../../../redux/actions/authAction";
import { useNavigate, useParams } from "react-router-dom";
// import Button from "@mui/material/Button";

const UserInformation = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();
   console.log(window.history,"paramsss")
   
  let questionId = params.id;
  const loginHandler = (e) => {
    // console.log(e,"eeeeeeeeeeeeeeeeeee")
    e.preventDefault();
    let data = {
      userName,
      phone,
      questionId,
      link: window.location.href
    };
    localStorage.setItem("userInformation", JSON.stringify(data));
    navigate("/question/answer");
    // dispatch(login(data)).then((res)=>{
    //   console.log(res,"eeee")
    //   localStorage.setItem("user", JSON.stringify(res));
    //   if(res?.account?.role=="admin"){
    //     navigate("/admin")
    //   }
    // });
  };
  // function isNumberKey(evt) {
  //   var charCode = evt.which ? evt.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  //   return true;
  // }
  useEffect(() => {
    function preventBack() {
      window.history.forward(); 
  }
  preventBack()
  setTimeout("preventBack()", 0);
    
  window.onunload =()=>null
  },[])
  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          User information
        </Typography>

        <input
          type="string"
          placeholder="User Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        />

        <Box mt={4}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserInformation;

import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const MainListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ListItemButton onClick={() => navigate("/admin")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/admin/question")}>
        <ListItemIcon>
          <CreditScoreIcon />
        </ListItemIcon>
        <ListItemText primary="Questions" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/admin/translation")}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Translation" />
      </ListItemButton>
    </div>
  );
};
export default MainListItems;
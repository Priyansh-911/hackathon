import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { Component } from "react";

export default function() {
  let navigate=useNavigate();
    return (
        <MyList type="row">
        <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
              sx={{
                  justifyContent: "center",
              }} 
            >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                    <FavoriteIcon />
                </ListItemIcon>
                
            </ListItemButton>
            
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
              sx={{
                  justifyContent: "center",
              }} 
              onClick={() =>{
                  navigate("/login");
              }}
            >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                    <PersonIcon />
                </ListItemIcon>
                
                
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
    )
}
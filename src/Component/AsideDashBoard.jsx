import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import ErrorCenterContext from "../Context/ErroCenterContext";

const AsideDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setConected, setRenderDash } = useContext(ErrorCenterContext);
  const history = useHistory();

  const handleListItemClick = (ev, index) => {
    setSelectedIndex(index);
    setRenderDash(ev)
  };

  const handleLogaut = () => {
    setConected(false);
    history.push("/");
  }

  return(
    <Box sx={{ width: 200, color: "#fff",bgcolor: "#20BEC6", heigth: "100%"}}>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ bgcolor: "#ED1941", color: "#fff" }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick("error-list", 0)}
            >
              {/* <ListItemIcon><InboxIcon/></ListItemIcon> */}
              <ListItemText primary="Listagem" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ bgcolor: "#ED1941" }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick("user", 1)}
            >
              {/* <ListItemIcon><InboxIcon/></ListItemIcon> */}
              <ListItemText primary="Minha conta" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ bgcolor: "#ED1941" }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick("graphics", 2)}
            >
              {/* <ListItemIcon><InboxIcon/></ListItemIcon> */}
              <ListItemText primary="Infograficos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ bgcolor: "#ED1941" }} onClick={ handleLogaut }>
              {/* <ListItemIcon><InboxIcon/></ListItemIcon> */}
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default AsideDashboard;

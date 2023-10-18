import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ReactMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AiOutlineMenu className="text-white cursor-pointer " />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/about'>About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/skills'>Skills</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/education'>Education</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/experience'>Experience</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/experience'>Experience</Link>
        </MenuItem>
        <MenuItem>
        <Link to='/project'>Project</Link>  
        </MenuItem>
        <MenuItem>
        <a href='https://drive.google.com/file/d/1u6hCNW0fuYzXc58__9x97GNrUVZdGDLX/view' target='_blank' >Resume</a>
        </MenuItem>

      </Menu>
    </div>
  );
}

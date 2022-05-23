import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { deleteWinter } from "./Services";

export default function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubmitHandler = async (e) => {
    deleteWinter(props.del);
    props.setReLoad(!props.reLoad);
  };

  return (
    <div>
      <Button sx={{ width: 170, color: "white" }}
            variant="outlined" size="medium" onClick={handleClickOpen} disabled={props.delt}>
        Delete
      </Button>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "800px",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Delete Records ?</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "white" }}>
            Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ width: 200, color: "white" }}
            variant="outlined"
           onClick={handleClose}>Cancel</Button>
          <Button
            sx={{ width: 200, color: "white" }}
            variant="outlined" 
            onClick={() => {
              SubmitHandler();
              handleClose();
            }}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

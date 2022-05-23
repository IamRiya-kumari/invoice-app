import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { editWinter } from "./Services";

const EditDialog = ({props,reLoad,setReLoad,edit}) => {
  const [open, setOpen] = React.useState(false);
  const [Winter, setWinter] = React.useState({
    invoice_currency:"",
    cust_payment_terms:"",
    sl_no:"",
  });
  React.useEffect(() => {
    setWinter({
      invoice_currency: props[1],
      cust_payment_terms: props[2],
      sl_no: props[0],
    });
  }, [props]);

  const { invoice_currency, cust_payment_terms } = Winter;

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setWinter({ ...Winter, [name]: value });
  };

  const SubmitHandler = async () => {
    await editWinter(Winter);
    setReLoad(!reLoad);
  };

  const handleClickOpen = () => {
    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ width: 170, color: "white" }}
            variant="outlined" size="medium" onClick={handleClickOpen} disabled={edit}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
        ChangeHandler={ChangeHandler}
        SubmitHandler={SubmitHandler}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "800px",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Edit</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Invoice Currency"
            value={invoice_currency}
            type="text"
            fullWidth
            variant="standard"
            name="invoice_currency"
            style={{ width: 200, margin: "0px 30px 0px 0px" }}
            onChange={ChangeHandler}
          />

          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            value={cust_payment_terms}
            name="cust_payment_terms"
            variant="standard"
            style={{ width: 200, margin: "0px 20px 0px 0px" }}
            onChange={ChangeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button
          sx={{ width: 250, color: "white" }}
            variant="outlined"
            onClick={() => {
              SubmitHandler();
              handleClose();
            }}
          >
            Edit
          </Button>
          <Button
          sx={{ width: 250, color: "white" }}
            variant="outlined"
           onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditDialog;

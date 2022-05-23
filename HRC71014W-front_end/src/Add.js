import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addWinter } from "./Services";

export const AddDialog = ({reLoad,setReLoad}) => {
  const [open, setOpen] = React.useState(false);
  const [Winter, setWinter] = React.useState({
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });
  const {
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  } = Winter;

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setWinter({ ...Winter, [name]: value });
  };

  const SubmitHandler = async (e) => {
     await addWinter(Winter);
     setReLoad(!reLoad);
     setWinter({
      business_code: "",
      cust_number: "",
      clear_date: "",
      buisness_year: "",
      doc_id: "",
      posting_date: "",
      document_create_date: "",
      due_in_date: "",
      invoice_currency: "",
      document_type: "",
      posting_id: "",
      total_open_amount: "",
      baseline_create_date: "",
      cust_payment_terms: "",
      invoice_id: "",
    });
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
            variant="outlined" size="medium" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"xl"}
        business_code={business_code}
        cust_number={cust_number}
        clear_date={clear_date}
        buisness_year={buisness_year}
        doc_id={doc_id}
        posting_date={posting_date}
        document_create_date={document_create_date}
        due_in_date={due_in_date}
        invoice_currency={invoice_currency}
        document_type={document_type}
        posting_id={posting_id}
        total_open_amount={total_open_amount}
        baseline_create_date={baseline_create_date}
        cust_payment_terms={cust_payment_terms}
        invoice_id={invoice_id}
        ChangeHandler={ChangeHandler}
        SubmitHandler={SubmitHandler}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "1300px",
          },
        }}
      >
        <DialogTitle sx={{ color: "white" }}>Add</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            value={business_code}
            name="business_code"
            label="Business Code"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            value={cust_number}
            name="cust_number"
            label="Customer Number"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            id="date"
            name="clear_date"
            value={clear_date}
            label="Clear Date"
            onChange={ChangeHandler}
            type="date"
            variant="standard"
            InputLabelProps={{shrink: true,}}
            style={{ width: 280, margin: "10px" }}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            name="buisness_year"
            value={buisness_year}
            label="Business Year"
            variant="standard"
            onChange={ChangeHandler}
          />

          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Document id"
            name="doc_id"
            value={doc_id}
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            id="date"
            name="posting_date"
            value={posting_date}
            label="Posting Date"
            onChange={ChangeHandler}
            type="date"
            variant="standard"
            InputLabelProps={{shrink: true,}}
            style={{ width: 280, margin: "10px" }}
          />
          <TextField
            margin="dense"
            fullWidth
            id="date"
            name="document_create_date"
            value={document_create_date}
            label="Document Create Date"
            onChange={ChangeHandler}
            type="date"
            variant="standard"
            InputLabelProps={{shrink: true,}}
            style={{ width: 280, margin: "10px" }}
          />
          <TextField
            margin="dense"
            fullWidth
            id="date"
            value={due_in_date}
            name="due_in_date"
            label="Due Date"
            onChange={ChangeHandler}
            type="date"
            variant="standard"
            InputLabelProps={{shrink: true,}}
            style={{ width: 280, margin: "10px" }}
          />

          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Invoice Currency"
            value={invoice_currency}
            name="invoice_currency"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Document type"
            value={document_type}
            name="document_type"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Posting Id"
            value={posting_id}
            name="posting_id"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Total Open Amount"
            value={total_open_amount}
            name="total_open_amount"
            variant="standard"
            onChange={ChangeHandler}
          />

          <TextField
            margin="dense"
            fullWidth
            id="date"
            name="baseline_create_date"
            value={baseline_create_date}
            label="Baseline Create Date"
            onChange={ChangeHandler}
            type="date"
            variant="standard"
            InputLabelProps={{shrink: true,}}
            style={{ width: 280, margin: "10px" }}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            label="Customer payment Terms"
            value={cust_payment_terms}
            name="cust_payment_terms"
            variant="standard"
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            fullWidth
            style={{ width: 280, margin: "10px" }}
            id="demo-helper-text-aligned-no-helper"
            value={invoice_id}
            name="invoice_id"
            label="Invoice Id"
            variant="standard"
            onChange={ChangeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ width: 650, color: "white" }}
            variant="outlined"
            value={"Add Winter"}
            onClick={() => {
              SubmitHandler();
              handleClose();
            }}
          >
            ADD
          </Button>
          <Button
            sx={{ width: 650, color: "white" }}
            variant="outlined"
            onClick={handleClose}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDialog;

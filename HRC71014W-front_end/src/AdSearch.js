import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function SearchDialog({setVals,reLoad,setReLoad}) {
  const [open, setOpen] = React.useState(false);
  const [searchValues, setSearchValues] = React.useState({
    cust_number: "",
    buisness_year: "",
    doc_id: "",
    invoice_id: "",
  });

  const {
    cust_number,
    buisness_year,
    doc_id,
    invoice_id,
  } = searchValues;


  const validate = (arr) => {
    let search = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ""){
            search = false;
            break;
        }
    }
    return search;
}
let arr = Object.values(searchValues);
React.useEffect(() => {
  let res = validate(arr);
  if(open && res){
      setVals([searchValues]);
      
  }
},[searchValues,open]);


  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchValues({ ...searchValues, [name]: value });
  };

  const handleClickOpen = () => {
    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubmitHandler =() => {
    let res = validate(arr);

    setReLoad(false);
    if (res){
        handleClose(true);
        setSearchValues({cust_number: "",
        buisness_year: "",
        doc_id: "",
        invoice_id: "",
      });
    }
  };

  return (
    <div>
      <Button sx={{ width: 170, color: "white",height: 35 }} variant="outlined" onClick={handleClickOpen}>
        Advance Search
      </Button>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250",
            maxWidth: "700px",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Advance Search</DialogTitle>
        <DialogContent>
      
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Document Id"
            name="doc_id"
            type="text"
            fullWidth
            variant="standard"
            style={{ width: 280, margin: "10px" }}
            value={doc_id}
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Invoice Id"
            name="invoice_id"
            type="text"
            fullWidth
            variant="standard"
            style={{ width: 280, margin: "10px" }}
            value={invoice_id}
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Customer Number"
            name="cust_number"
            type="text"
            fullWidth
            variant="standard"
            style={{ width: 280, margin: "10px" }}
            value={cust_number}
            onChange={ChangeHandler}
          />
          <TextField
            margin="dense"
            id="demo-helper-text-aligned-no-helper"
            label="Business Year"
            name="buisness_year"
            type="text"
            fullWidth
            variant="standard"
            style={{ width: 280, margin: "10px" }}
            value={buisness_year}
            onChange={ChangeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ width: 400, color: "white" }}
            variant="outlined" onClick={() => {
              SubmitHandler();
            }}>Search</Button>
          <Button sx={{ width: 400, color: "white" }}
            variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

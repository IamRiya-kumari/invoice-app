import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import "./App.css";
import { StylesProvider } from "@material-ui/core/styles";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import { CenterFocusStrong } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { getData } from "./Services";
import { AddDialog } from "./Add";
import EditDialog from "./EditData";
import DeleteDialog from "./DeleteData";
import SearchDialog from "./AdSearch";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

const App = function App() {
  const [details, setDetails] = useState([]);
  const [delDetails, setDelDetails] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [reLoad, setReLoad] = useState(false);
  const [row, setRow] = useState([]);
  const [vals, setVals] = useState([]);
  const [unSet, setUnSet] = useState([]);
  const [edit, setEdit] = useState(true);
  const [delt, setDelt] = useState(true);
  const [searchVal, setSearchVal] = useState({
    cust_number:"",
  });

  const {
    cust_number,
  } = searchVal;

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchVal({ ...searchVal, [name]: value });
  };

  useEffect(()=>{
    if(searchVal)
    {
      setUnSet([searchVal]);
    }
  },[searchVal]);

  const columns = [
    { title: "Sl no", field: "sl_no", editable: false },
    { title: "Bussiness Code", field: "business_code" },
    { title: "Customer Number", field: "cust_number" },
    { title: "Clear Date", field: "clear_date" },
    { title: "Bussiness Year", field: "buisness_year" },
    { title: "Document Id", field: "doc_id" },
    { title: "Posting Date", field: "posting_date" },
    { title: "Document Create Date", field: "document_create_date" },
    { title: "Due Date", field: "due_in_date" },
    { title: "Invoice Currency", field: "invoice_currency" },
    { title: "Document Type", field: "document_type" },
    { title: "Posting Id", field: "posting_id" },
    { title: "Total Open Amount", field: "total_open_amount" },
    { title: "Baseline Create Date", field: "baseline_create_date" },
    { title: "Customer Payment Terms", field: "cust_payment_terms" },
    { title: "Invoice Id", field: "invoice_id" },
  ];

  useEffect(async () => {
    const response = (await getData());
     setRow([...response]);
  }, [reLoad]);

  useEffect(()=>{
  },[details]);

  useEffect(()=>{
  },[delDetails]);

  useEffect(() => {
    let filteredRows = [];
    if(vals.length > 0){
      filteredRows = row.filter((el) => {
        return el.doc_id === vals[0].doc_id && el.invoice_id === vals[0].invoice_id && el.cust_number === vals[0].cust_number && el.buisness_year === vals[0].buisness_year;
      })

      if(reLoad === true){
        setFilteredRows({});
        console.log(reLoad);
        setVals([]);
        return "";
      } 

      if(filteredRows.length>0){
        setFilteredRows(filteredRows);
      }
    }
      if(unSet.length>0){
        filteredRows = row.filter((element) => {
          return element.cust_number === unSet[0].cust_number;
        })

        if(filteredRows.length>0){
          setFilteredRows(filteredRows);
          setUnSet([]);
          setReLoad(false);
          return "";
        }
      }

      if(reLoad===true){
        setFilteredRows({});
        return "";
      }
  
  },[vals,row,unSet,reLoad])

  return (
    <div className="main">
      <div className="head" id="header">
        <div className="logo1">
          <img className="garv" src={logo1} alt="" />
        </div>
        <div className="logo2">
          <img className="garv" src={logo2} alt="" />
        </div>
      </div>
      <div><h3 className="tag">Invoice List</h3></div>
      <StylesProvider injectFirst>
        <div className="headButtons">
          <div className="group1">
          <ButtonGroup 
            variant="outlined" aria-label="outlined primary button group">
            <Button sx={{ width: 170, color: "white", height: 35}} variant="contained" size="medium">
              Predict
            </Button>
            <Button
            sx={{ width: 170, color: "white", height: 35}}
             size="medium">
              Analytics View
            </Button>
            </ButtonGroup>
            <SearchDialog setVals={setVals} setReLoad={setReLoad} />
          </div>
          <div className="reload"><Button sx={{height: 35}} variant="outlined" onClick={()=>{setReLoad(!reLoad); setSearchVal({cust_number:""})}}><RefreshOutlinedIcon/></Button></div>
          <div>
            <TextField
              id="filled-basic"
              label="Search Customer Id"
              name="cust_number"
              value={cust_number}
              variant="filled"
              onChange={ChangeHandler}
            />
          </div>

          <div className="group2">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <AddDialog reLoad={reLoad} setReLoad={setReLoad}/>
            <EditDialog props={details} reLoad={reLoad} setReLoad={setReLoad} edit={edit}/>
            <DeleteDialog del={delDetails} reLoad={reLoad} setReLoad={setReLoad} delt={delt} />
            </ButtonGroup>
          </div>
        </div>
        <div id="table">
          <MaterialTable
          // style={{maxHeight:400}}
            // isLoading={true}
            icons={tableIcons}
            columns={columns}
            data={Object.keys({...filteredRows}).length > 0 ? filteredRows : row}
            onSelectionChange={(selectedRows) => {
             let details = [];
             let delDetails = [];
              if (selectedRows.length === 1) {
                setEdit(false);
                details.push(selectedRows[0].sl_no);
                details.push(selectedRows[0].invoice_currency);
                details.push(selectedRows[0].cust_payment_terms);
              }
              else{
                setEdit(true);
              }

              if(selectedRows.length > 0)
              {
                setDelt(false);
                for(let i=0; i<selectedRows.length; i++)
                {
                 delDetails.push(selectedRows[i].sl_no);
                }
              } 
              else {
                setDelt(true);
              }
              setDetails(details);
              setDelDetails(delDetails);
            }}
            options={{
              showTextRowsSelected: false,
              showTitle: false,
              search: false,
              pageSize: 10,
              showFirstLastPageButtons: false,
              selection: true,
              rowStyle: {
                fontSize: 14,
                height: 38,
                maxHeight: 38,
                padding: 0,
              },
              headerStyle: {
                fontSize: 14,
                whiteSpace: "break-space",
                padding: 0,
                textAlign: CenterFocusStrong,
              },
            }}
          />
        </div>
      </StylesProvider>
      <div id="footer">
        <a href="https://www.highradius.com/privacy-policy" className="link">
          Privacy Policy
        </a>
        <span className="copy">
          | © 2022 HighRadius Corporation. All rights are reserved.
        </span>
      </div>
    </div>
  );
};
export default App;

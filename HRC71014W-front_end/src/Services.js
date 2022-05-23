import axios from "axios";

export const getData = async () => {
  let response = await axios.get(
    "http://localhost:8080/HRCDataLoad/DataLoading"
  );
  return response.data.winter;
};

export const addWinter = async ({
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
}) => {
  let data =
    "business_code=" +
    business_code +
    "&cust_number=" +
    cust_number +
    "&clear_date=" +
    clear_date +
    "&buisness_year=" +
    buisness_year +
    "&doc_id=" +
    doc_id +
    "&posting_date=" +
    posting_date +
    "&document_create_date=" +
    document_create_date +
    "&due_in_date=" +
    due_in_date +
    "&invoice_currency=" +
    invoice_currency +
    "&document_type=" +
    document_type +
    "&posting_id=" +
    posting_id +
    "&total_open_amount=" +
    total_open_amount +
    "&baseline_create_date=" +
    baseline_create_date +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&invoice_id=" +
    invoice_id;
  let respone = await axios.get(
    "http://localhost:8080/HRCDataLoad/Add?" + data
  );
  return respone.data;
};

export const editWinter = async ({
  invoice_currency,
  cust_payment_terms,
  sl_no,
}) => {
  let data =
    "invoice_currency=" +
    invoice_currency +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&sl_no=" +
    sl_no;
  let respone = await axios.get(
    "http://localhost:8080/HRCDataLoad/Update?" + data,
    {}
  );
  return respone.data;
};

export const deleteWinter = async (props) =>
{
  const parseAsStr = (arr=[]) => {
    let str = "";
    arr.forEach((el, i) => {
      str += `sl_no_arr=${el}&`;
    });
  
    return str.slice(0,-1);
  };
  const delQry = parseAsStr(props);
  // const delQry = "sl_no_arr=48574&sl_no_arr=48575";
   await axios.get(`http://localhost:8080/HRCDataLoad/Delete?${delQry}`);
};


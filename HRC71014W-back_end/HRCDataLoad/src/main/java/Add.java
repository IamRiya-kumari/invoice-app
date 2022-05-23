
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Add
 */
@WebServlet("/Add")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	
    public Add() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub		
		try {
			HashMap<Object,Object>Response = new HashMap<Object,Object>();
			

			String sql = "INSERT INTO winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) VALUES"+"(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
			 
			String business_code = request.getParameter("business_code");
			String cust_number = request.getParameter("cust_number");
			String clear_date = request.getParameter("clear_date");
			String buisness_year= request.getParameter("buisness_year");
			String doc_id= request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String document_create_date= request.getParameter("document_create_date");
			String due_in_date= request.getParameter("due_in_date");
			String invoice_currency= request.getParameter("invoice_currency");
			String document_type= request.getParameter("document_type");
			String posting_id=request.getParameter("posting_id");
			String total_open_amount=request.getParameter("total_open_amount");
			String baseline_create_date= request.getParameter("baseline_create_date");
			String cust_payment_terms= request.getParameter("cust_payment_terms");
			String invoice_id=request.getParameter("invoice_id");
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root123");
		
			
			PreparedStatement preparedStatement = con.prepareStatement(sql);
	
			preparedStatement.setString(1, business_code);
			preparedStatement.setString(2, cust_number);
			preparedStatement.setString(3, clear_date);
			preparedStatement.setString(4, buisness_year);
			preparedStatement.setString(5, doc_id);
			preparedStatement.setString(6, posting_date);
			preparedStatement.setString(7, document_create_date);
			preparedStatement.setString(8, due_in_date);
			preparedStatement.setString(9, invoice_currency);
			preparedStatement.setString(10, document_type);
			preparedStatement.setString(11, posting_id);
			preparedStatement.setString(12, total_open_amount);
			preparedStatement.setString(13, baseline_create_date);
			preparedStatement.setString(14, cust_payment_terms);
			preparedStatement.setString(15,invoice_id);
			if(preparedStatement.executeUpdate()>0)
			{
				Response.put("instert",true);
			}
			else {
				Response.put("instert",false);
			}
			
			Gson gson = new Gson();
			String Responsejson = gson.toJson(Response);
			response.getWriter().append(Responsejson);
			con.close();
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Access-Control-Allow-Methods", "*");
			response.addHeader("Access-Control-Allow-Headers", "*");
			
	}
		catch(Exception e){
			e.printStackTrace();
		}
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
			doGet(request, response);

		
		
	}

}

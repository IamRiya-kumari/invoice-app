

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
 * Servlet implementation class Update
 */
@WebServlet("/Update")
public class Update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Update() {
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
			int sl_no=Integer.parseInt(request.getParameter("sl_no"));
	
			String invoice_currency= request.getParameter("invoice_currency");
	
			String cust_payment_terms= request.getParameter("cust_payment_terms");
	
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root123");
			String sql = "UPDATE winter_internship set invoice_currency=?, cust_payment_terms=? where sl_no=?";
			PreparedStatement preparedStatement = con.prepareStatement(sql);
			preparedStatement.setString(1, invoice_currency);
			preparedStatement.setString(2, cust_payment_terms);
			preparedStatement.setInt(3, sl_no);
			if(preparedStatement.executeUpdate()>0) {
				Response.put("update", true);
			}else {
				Response.put("update", false);
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

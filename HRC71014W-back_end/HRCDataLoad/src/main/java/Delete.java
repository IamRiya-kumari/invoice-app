
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public Delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
	
			StringBuilder sl_nos = new StringBuilder (); 
			String vals[] = request.getParameterValues("sl_no_arr");
			for (String sl_no: vals){
				
				sl_nos.append("'").append(sl_no).append("',");
				
				} 
			sl_nos.deleteCharAt(sl_nos.length() - 1);			
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root123");

			String query = "DELETE FROM winter_internship WHERE sl_no IN (" + sl_nos + ")";
			
			PreparedStatement ps = con.prepareStatement(query);
			ps.executeUpdate();
			
			con.close();
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Access-Control-Allow-Methods", "*");
			response.addHeader("Access-Control-Allow-Headers", "*");
					
			}
			catch (Exception e) {
				e.printStackTrace();
			}
		}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

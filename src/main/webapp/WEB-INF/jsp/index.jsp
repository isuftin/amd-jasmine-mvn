<%@page import="gov.usgs.cida.config.DynamicReadOnlyProperties"%>
<%@page import="java.io.File"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%!	protected DynamicReadOnlyProperties props = new DynamicReadOnlyProperties();

	{
		try {
			File propsFile = new File(getClass().getClassLoader().getResource("application.properties").toURI());
			props = new DynamicReadOnlyProperties(propsFile);
			props = props.addJNDIContexts(new String[0]);
		} catch (Exception e) {
			System.out.println("Could not find JNDI - Application will probably not function correctly");
		}
	}

	private String getProp(String key) {
		String result = props.getProperty(key, "");
		return result;
	}

%>
<%
	ServletContext ctx = request.getServletContext();
	String contextPath = ctx.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
		<script data-main="scripts/main" src="<%=contextPath%>/webjars/requirejs/<%= getProp("version.require") %>/require.js"></script>
		<script>
			require.config({
				baseUrl: "<%=contextPath%>/scripts/",
				paths: {
					"jquery": "<%=contextPath%>/webjars/jquery/<%= getProp("version.jquery") %>/jquery"
				}
			});
		</script>
    </body>
</html>

<%@page import="gov.usgs.cida.config.DynamicReadOnlyProperties"%>
<%@page import="java.io.File"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%!
	protected DynamicReadOnlyProperties props = new DynamicReadOnlyProperties();

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
	String contextPath = props.getProperty("application.context", ctx.getContextPath());
%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div id="container">
			<div id="menu"></div>
			<div id="content"></div>
		</div>
		<script data-main="scripts/main" src="<%=contextPath%>/webjars/requirejs/<%= getProp("version.require")%>/require.js"></script>
		<script>
			require.config({
				baseUrl: "<%=contextPath%>/scripts/",
				paths: {
					"jquery": ["<%=contextPath%>/webjars/jquery/<%= getProp("version.jquery")%>/jquery"],
					"backbone": ['<%=contextPath%>/webjars/backbonejs/<%= getProp("version.backbone")%>/backbone'],
					"underscore": ['<%=contextPath%>/webjars/underscorejs/<%= getProp("version.underscore")%>/underscore'],
					"text": ['<%=contextPath%>/webjars/requirejs-text/<%= getProp("version.require.text")%>/text']
				},
				shim: {
					'backbone': ['underscore']
				}
			});
		</script>
    </body>
</html>

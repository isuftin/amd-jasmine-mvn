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
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
		<link rel="shortcut icon" type="image/png" href="<%=contextPath%>/webjars/jasmine/<%=getProp("version.jasmine")%>/jasmine_favicon.png">
		<link rel="stylesheet" type="text/css" href="<%=contextPath%>/webjars/jasmine/<%=getProp("version.jasmine")%>/jasmine.css">
		<script data-main="jasmine-entry" src="<%=contextPath%>/webjars/requirejs/<%=getProp("version.require")%>/require.js"></script>
		<script>
			require.config({
				baseUrl: '<%=contextPath%>/scripts',
				paths: {
					'jasmine-entry': ['<%=contextPath%>/test/jasmine-entry'],
					'jasmine': ['<%=contextPath%>/webjars/jasmine/<%=getProp("version.jasmine")%>/jasmine'],
					'jasmine-html': ['<%=contextPath%>/webjars/jasmine/<%=getProp("version.jasmine")%>/jasmine-html'],
					'jasmine-boot': ['<%=contextPath%>/webjars/jasmine/<%=getProp("version.jasmine")%>/boot'],
					'jquery': ["<%=contextPath%>/webjars/jquery/<%= getProp("version.jquery")%>/jquery"]
				},
				shim: {
					'jasmine-html': {
						deps: ['jasmine']
					},
					'jasmine-boot': {
						deps: ['jasmine', 'jasmine-html']
					}
				}
			});
		</script>
    </head>
    <body>
    </body>
</html>

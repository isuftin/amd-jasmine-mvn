package gov.usgs.cida.rest.entry;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.mvc.jsp.JspMvcFeature;
import org.glassfish.jersey.servlet.ServletProperties;

/**
 *
 * @author isuftin
 */
@ApplicationPath("/ui")
public class EntryRestApplication extends ResourceConfig {
	public EntryRestApplication() {
		packages(this.getClass().getPackage().getName());
		property(JspMvcFeature.TEMPLATE_BASE_PATH, "/WEB-INF/jsp");
		property(ServletProperties.FILTER_STATIC_CONTENT_REGEX, "/(resources|(WEB-INF/jsp))/.*");
		register(JspMvcFeature.class);
	}
	
}

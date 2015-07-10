package gov.usgs.cida.rest.resources;

import org.glassfish.jersey.server.ResourceConfig;

/**
 *
 * @author isuftin
 */
public class ResourceRestApplication extends ResourceConfig {
	public ResourceRestApplication() {
		packages(this.getClass().getPackage().getName());
	}
}

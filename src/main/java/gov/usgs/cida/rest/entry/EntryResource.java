package gov.usgs.cida.rest.entry;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.server.mvc.Viewable;

/**
 *
 * @author isuftin
 */
@Path("/")
public class EntryResource {

	@GET
	@Produces(MediaType.TEXT_HTML)
	public Response createInitialEntry() {
		return Response.ok(new Viewable("/index")).build();
	}
	
	@GET
	@Path("/users")
	@Produces(MediaType.TEXT_HTML)
	public Response createUsers() {
		return Response.ok(new Viewable("/index")).build();
	}
	
	@GET
	@Path("/projects")
	@Produces(MediaType.TEXT_HTML)
	public Response createProjects() {
		return Response.ok(new Viewable("/index")).build();
	}
}

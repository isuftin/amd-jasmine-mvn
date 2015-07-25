package gov.usgs.cida.rest.data.garden;

import com.google.gson.Gson;
import gov.usgs.cida.model.Garden;
import gov.usgs.cida.model.Plant;
import gov.usgs.cida.model.collection.Gardens;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 *
 * @author isuftin
 */
@Path("/garden")
public class GardenResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllGardenNames() {
		Gson gson = new Gson();
		Collection<Map<String, String>> map = new ArrayList<>();
		for (String name : Gardens.getGardenNames()) {
			Map<String, String> gardenName = new HashMap<>(1);
			gardenName.put("name", name);
			map.add(gardenName);
		}
		String output = gson.toJson(map);
		return Response.ok(output).build();
	}
	
	@GET
	@Path("/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPlantsInGarden(@PathParam("name") String name) {
		Response response;
		Garden garden = Gardens.getGarden(name);
		if (garden != null) {
			Plant[] gardenPlants = garden.getPlants();
			Gson gson = new Gson();
			String output = gson.toJson(gardenPlants);
			response = Response.ok(output).build();
		} else {
			response = Response.status(Status.NOT_FOUND).build();
		}
		return response;
	}
}

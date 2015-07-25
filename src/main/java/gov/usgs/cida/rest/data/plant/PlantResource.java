package gov.usgs.cida.rest.data.plant;

import com.google.gson.Gson;
import gov.usgs.cida.model.Plant;
import gov.usgs.cida.model.collection.Plants;
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

/**
 *
 * @author isuftin
 */
@Path("/plant")
public class PlantResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPlantNames() {
		Gson gson = new Gson();
		Collection<Map<String, String>> map = new ArrayList<>();
		for (String name : Plants.getPlantNames()) {
			Map<String, String> plantNameMap = new HashMap<>();
			plantNameMap.put("name", name);
			map.add(plantNameMap);
		}
		String output = gson.toJson(map);
		return Response.ok(output).build();
	}
	
	@GET
	@Path("/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPlant(@PathParam("name") String name) {
		Response response;
		Plant plant = Plants.getPlant(name);
		if (plant != null) {
			Gson gson = new Gson();
			String output = gson.toJson(plant);
			response = Response.ok(output).build();
		} else {
			response = Response.status(Response.Status.NOT_FOUND).build();
		}
		return response;
	}
}

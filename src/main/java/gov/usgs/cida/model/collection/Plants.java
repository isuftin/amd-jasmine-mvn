package gov.usgs.cida.model.collection;

import gov.usgs.cida.model.Plant;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author isuftin
 */
public class Plants {
	private static final Map<String, Plant> plants = new HashMap<>();
	
	static {
		plants.put("abelia", new Plant("Abelia", "pink", false));
		plants.put("balsam", new Plant("Balsam", "pink", false));
		plants.put("cherry", new Plant("Cherry", "white", true));
		plants.put("daffodil", new Plant("Daffodil", "yellow", false));
		plants.put("edelweiss", new Plant("Edelweiss", "white", false));
		plants.put("fennel", new Plant("Fennel", "green", false));
		plants.put("ginkgo", new Plant("Ginkgo", "green", false));
		plants.put("hazelnut", new Plant("Hazelnut", "brown", true));
		plants.put("indigo", new Plant("Indigo", "white", false));
	}
	
	public static Plant getPlant(String plantName) {
		return plants.get(plantName);
	}
	
	public static String[] getPlantNames() {
		return plants.keySet().toArray(new String[0]);
	}
}

package gov.usgs.cida.model.collection;

import gov.usgs.cida.model.Garden;
import gov.usgs.cida.model.Plant;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author isuftin
 */
public class Gardens {

	private static final Map<String, Garden> gardens = new HashMap<>();

	static {
		Garden[] _gardens = {
			new Garden("olbrich", new Plant[]{
				new Plant("Abelia", "pink", false),
				new Plant("Balsam", "pink", false),
				new Plant("Cherry", "white", true)
			}),
			new Garden("arboretum", new Plant[]{
				new Plant("Daffodil", "yellow", false),
				new Plant("Edelweiss", "white", false),
				new Plant("Fennel", "green", false)
			}),
			new Garden("rotary", new Plant[]{
				new Plant("Ginkgo", "green", false),
				new Plant("Hazelnut", "brown", true),
				new Plant("Indigo", "white", false)
			})
		};

		for (Garden garden : _gardens) {
			gardens.put(garden.getName(), garden);
		}
	}
	
	public static Garden getGarden(String gardenName) {
		return gardens.get(gardenName);
	}
	
	public static String[] getGardenNames() {
		return gardens.keySet().toArray(new String[0]);
	}
}

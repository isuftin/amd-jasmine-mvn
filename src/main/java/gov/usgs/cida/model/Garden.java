package gov.usgs.cida.model;

/**
 *
 * @author isuftin
 */
public class Garden {

	private String name;
	private Plant[] plants;

	public Garden() {
	}

	public Garden(String name, Plant[] plants) {
		this.name = name;
		this.plants = plants;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Plant[] getPlants() {
		return plants;
	}

	public void setPlants(Plant[] plants) {
		this.plants = plants;
	}

}

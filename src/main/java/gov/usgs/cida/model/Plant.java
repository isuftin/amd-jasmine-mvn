package gov.usgs.cida.model;

import com.google.gson.annotations.SerializedName;

/**
 *
 * @author isuftin
 */
public class Plant {

	private String name;
	private String color;
	@SerializedName("fruit_bearing")
	private boolean fruitBearing;

	public Plant() {
	}

	public Plant(String name, String color, boolean fruitBearing) {
		this.name = name;
		this.color = color;
		this.fruitBearing = fruitBearing;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(String color) {
		this.color = color;
	}

	/**
	 * @return the fruitBearing
	 */
	public boolean isFruitBearing() {
		return fruitBearing;
	}

	/**
	 * @param fruitBearing the fruitBearing to set
	 */
	public void setFruitBearing(boolean fruitBearing) {
		this.fruitBearing = fruitBearing;
	}

}

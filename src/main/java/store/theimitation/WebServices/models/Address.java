package store.theimitation.WebServices.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Size;


@Entity
public class Address {
	@Id
	private Integer id;
	@Column
	@Size(max = 60)
	private String name;
	private String mobileNumber;
	private Integer pincode;
	@Column
	@Size(max = 30)
	private String state;
	private String address;
	@Column
	@Size(max = 30)
	private String district;
	@Column
	@Size(max = 30)
	private String town;
	@Column
	@Size(max = 10)
	private String type;
	private Boolean makeDefault;
	
	@Column(name = "user_id", unique = true, nullable = false)
	private Long userId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Boolean getMakeDefault() {
		return makeDefault;
	}

	public void setMakeDefault(Boolean makeDefault) {
		this.makeDefault = makeDefault;
	}

}

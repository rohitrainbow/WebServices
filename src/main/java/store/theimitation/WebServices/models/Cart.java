package store.theimitation.WebServices.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cart {
	@Id
	private Integer id;
	private Integer quantity;
	
	@Column(name = "user_id", unique = true, nullable = false)
	private Long userId;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return id+"";
	}
	
}

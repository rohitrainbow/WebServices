package store.theimitation.WebServices.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProdDescr {

	@Id
	private Long descrId;

	private String descr;

	@Column(name = "prod_id", unique = true, nullable = false)
	private Long productId;

	public ProdDescr() {
		super();
	}

	public ProdDescr(Long descrId, String descr, Long productId) {
		super();
		this.descrId = descrId;
		this.descr = descr;
		this.productId = productId;
	}

	public Long getDescrId() {
		return descrId;
	}

	public void setDescrId(Long descrId) {
		this.descrId = descrId;
	}

	public String getDescr() {
		return this.descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

}

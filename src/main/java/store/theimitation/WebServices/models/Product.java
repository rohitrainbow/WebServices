package store.theimitation.WebServices.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "Product name is required.")
	@Basic(optional = false)
	private String name;

	@OneToOne
	@JoinColumn(name = "descr_id")
	private ProdDescr prodDescr;

	private Double price;

	private String pictureUrl;

	private String category;

	private String subCategory;
	
	private String searchKeywords;

	public Product(Long id, @NotNull(message = "Product name is required.") String name, Double price,
			String pictureUrl, ProdDescr prodDescr, String category, String subCategory,String searchKeywords) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.pictureUrl = pictureUrl;
		this.prodDescr = prodDescr;
		this.subCategory=subCategory;
		this.category=category;
		this.setSearchKeywords(searchKeywords);
	}

	public Product() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getPictureUrl() {
		return pictureUrl;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	public ProdDescr getProdDescr() {
		return prodDescr;
	}

	public void setProdDescr(ProdDescr prodDescr) {
		this.prodDescr = prodDescr;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getSearchKeywords() {
		return searchKeywords;
	}

	public void setSearchKeywords(String searchKeywords) {
		this.searchKeywords = searchKeywords;
	}
	
	

}

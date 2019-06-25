package store.theimitation.WebServices.dtos;

import store.theimitation.WebServices.models.Product;

public class CartProductsDto {

	private Product product;
	private Double subTotal;
	private Double total;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(Double subTotal) {
		this.subTotal = subTotal;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

}

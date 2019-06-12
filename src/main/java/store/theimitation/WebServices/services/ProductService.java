package store.theimitation.WebServices.services;

import org.springframework.validation.annotation.Validated;

import store.theimitation.WebServices.dtos.ProductDto;
import store.theimitation.WebServices.models.ProdDescr;
import store.theimitation.WebServices.models.Product;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

	@NotNull
	Iterable<Product> getAllProducts();

	Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);
	
	ProdDescr getProductDescr(Long id);

	Product save(Product product);
	public Product getUsingProductName(String name);
	
	ProductDto getProductDetails(Long id);
}
package store.theimitation.WebServices.controllers;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import store.theimitation.WebServices.dtos.ProdDescrDto;
import store.theimitation.WebServices.dtos.ProductDto;
import store.theimitation.WebServices.models.Product;
import store.theimitation.WebServices.services.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductDto productDto;

	@Autowired
	ProdDescrDto prodDescrDto;

	private ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping(value = { "", "/" })
	@RequestMapping("/api/products")
	public @NotNull Iterable<Product> getProducts() {
		return productService.getAllProducts();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/api/product/{id}")
	public ProductDto getProductDescr(@PathVariable Long id) {
		return productService.getProductDetails(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/api/searchedProducts/{inputCriteria}")
	public @NotNull Iterable<Product> getSearchedProducts(@PathVariable String inputCriteria) {
		System.out.println(inputCriteria);
		return productService.getSearchedProducts(inputCriteria);
	}
}
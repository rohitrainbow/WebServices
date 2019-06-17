package store.theimitation.WebServices.daos;

import store.theimitation.WebServices.models.Product;

public interface ProductDao {
	Iterable<Product> getSearchedProducts(String inputCriteria);
}

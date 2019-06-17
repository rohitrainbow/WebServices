package store.theimitation.WebServices.daos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import store.theimitation.WebServices.models.Product;
import store.theimitation.WebServices.repositories.ProductRepository;

@Repository
public class ProductDaoImpl implements ProductDao {

	@Autowired
	ProductRepository productRepository;

	@Autowired
	EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Iterable<Product> getSearchedProducts(String inputCriteria) {
		// TODO Auto-generated method stub
		List<Product> searchedProducts = new ArrayList<Product>();
		try {
			searchedProducts = entityManager
					.createQuery("SELECT a FROM Product a where LOWER(a.searchKeywords) LIKE :inputCriteria")
					.setParameter("inputCriteria", "%" + inputCriteria.toLowerCase() + "%").getResultList();
		} catch (Exception e) {
		}
		return searchedProducts;
	}

}

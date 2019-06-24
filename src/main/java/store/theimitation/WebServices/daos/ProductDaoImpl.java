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
			if (inputCriteria != null) {
				String input[] = inputCriteria.split("-");
				if (input.length == 1) {
					searchedProducts = entityManager
							.createQuery("SELECT a FROM Product a where LOWER(a.searchKeywords) LIKE :inputCriteria")
							.setParameter("inputCriteria", "%" + inputCriteria.toLowerCase() + "%").getResultList();
				} else if (input.length == 2) {
					searchedProducts = entityManager.createQuery(
							"SELECT a FROM Product a where a.category = :inputCategory AND a.forGender= :inputGender")
							.setParameter("inputCategory", input[1]).setParameter("inputGender", input[0])
							.getResultList();
				} else {
					searchedProducts = entityManager.createQuery(
							"SELECT a FROM Product a where a.category = :inputCategory AND a.forGender= :inputGender AND a.subCategory=:inputSubCategory")
							.setParameter("inputCategory", input[1]).setParameter("inputGender", input[0])
							.setParameter("inputSubCategory", input[2]).getResultList();
				}
			}

		} catch (Exception e) {
		}
		return searchedProducts;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Iterable<Product> getCartProducts(String[] cartItems) {
		// TODO Auto-generated method stub
		List<Product> cartProducts = new ArrayList<Product>();
		try {

			String filterCriteria = String.join(",", cartItems);
			cartProducts = entityManager.createQuery("SELECT a FROM Product a where a.id IN (" + filterCriteria + ")")
					.getResultList();
		} catch (Exception e) {
		}
		return cartProducts;
	}

}

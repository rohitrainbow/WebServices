package store.theimitation.WebServices.repositories;

import org.springframework.data.repository.CrudRepository;

import store.theimitation.WebServices.models.Product;



public interface ProductRepository extends CrudRepository<Product, Long> {
}
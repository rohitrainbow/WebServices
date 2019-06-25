package store.theimitation.WebServices.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import store.theimitation.WebServices.models.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long> {

}

package store.theimitation.WebServices.repositories;

import org.springframework.data.repository.CrudRepository;

import store.theimitation.WebServices.models.User;



public interface UserRepository extends CrudRepository<User, Long> {

}

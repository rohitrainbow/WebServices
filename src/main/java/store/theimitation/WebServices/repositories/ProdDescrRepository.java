package store.theimitation.WebServices.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import store.theimitation.WebServices.models.ProdDescr;
@Repository
public interface ProdDescrRepository extends CrudRepository<ProdDescr, Long> {
}
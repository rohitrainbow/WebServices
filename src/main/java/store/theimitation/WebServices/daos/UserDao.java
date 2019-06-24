package store.theimitation.WebServices.daos;

import store.theimitation.WebServices.models.User;

public interface UserDao {

	public User getUser(String userName) throws Exception;

	public String userRegistration(User user) throws Exception;

	public User save(User user);
}

package store.theimitation.WebServices.services;

import store.theimitation.WebServices.dtos.UserDto;
import store.theimitation.WebServices.models.User;

public interface UserService {
	
	public UserDto authenticateUser(String userName,String password);
	public String userRegistration(User User);
	public void userActivationEmail(User user,String token);
}

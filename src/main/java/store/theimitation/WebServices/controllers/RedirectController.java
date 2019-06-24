package store.theimitation.WebServices.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RedirectController {
	@RequestMapping(value = "/android-app/{id}", method = RequestMethod.GET)
	public void method(HttpServletResponse httpServletResponse) {
	    httpServletResponse.setHeader("Location", "https://play.google.com/store/apps/details?id=store.theimitation.theimitationstore");
	    httpServletResponse.setStatus(302);
	}
}

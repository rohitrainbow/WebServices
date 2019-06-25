package store.theimitation.WebServices.controllers;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import store.theimitation.WebServices.models.Cart;
import store.theimitation.WebServices.dtos.CartProductsDto;
import store.theimitation.WebServices.services.CartService;

@RestController
@CrossOrigin(origins = { "http://20.198.10.4:4200", "http://localhost:4200" })
public class CartController {

	@Autowired
	CartService cartService;

	@RequestMapping(method = RequestMethod.POST, value = "/api/cartProducts")
	public @NotNull Iterable<CartProductsDto> getCartProducts(@RequestBody Cart[] cart) {
		return cartService.getCartProducts(cart);
	}
}

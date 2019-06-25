package store.theimitation.WebServices.services;

import store.theimitation.WebServices.dtos.CartProductsDto;
import store.theimitation.WebServices.models.Cart;

public interface CartService {
	Iterable<CartProductsDto> getCartProducts(Cart[] cart);
}

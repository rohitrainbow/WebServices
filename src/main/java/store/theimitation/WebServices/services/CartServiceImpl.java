package store.theimitation.WebServices.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import store.theimitation.WebServices.dtos.CartProductsDto;
import store.theimitation.WebServices.models.Cart;
import store.theimitation.WebServices.models.Product;

@Service
@Transactional
public class CartServiceImpl implements CartService {

	@Autowired
	ProductService productService;

	@Override
	public Iterable<CartProductsDto> getCartProducts(Cart[] cart) {
		// TODO Auto-generated method stub
		int i = 0;
		String filter[] = new String[cart.length];
		Map<Integer, Integer> cartMap = new HashMap<Integer, Integer>();
		for (i = 0; i < cart.length; i++) {
			filter[i] = "" + cart[i].getId();
			cartMap.put(cart[i].getId(), cart[i].getQuantity());
		}
		Iterable<Product> cartItems = productService.getCartProducts(filter);
		List<CartProductsDto> cartProducts = new ArrayList<CartProductsDto>();
		CartProductsDto cartProductsDto = null;
		Double total = 0.00;
		for (Product product : cartItems) {
			cartProductsDto = new CartProductsDto();
			cartProductsDto.setProduct(product);
			Double subTotal = product.getPrice() * cartMap.get(product.getId().intValue());
			total = total + subTotal;
			cartProductsDto.setSubTotal(subTotal);
			cartProductsDto.setTotal(total);
			cartProducts.add(cartProductsDto);
		}
		return cartProducts;
	}

}

package store.theimitation.WebServices;

import java.util.Arrays;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] cartItems= {"iPhone", "Samsung Galaxy", "iPad"};
		String models = String.join(",", cartItems);
		System.out.println(Arrays.toString(cartItems));
		System.out.println(models);
	}

}

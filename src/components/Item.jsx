import React from "react";
import Cart from "./Cart";
import cartItems from "../util/cartItems.js";

const Item = (item) => {
	//   console.log(item);
	const { image, name, gen, flag, price } = item;
	const addHandler = (image, name, gen, flag, price) => {
		const isItemPresentIndex = cartItems.findIndex(
			(item) => item.name === name
		);
		if (isItemPresentIndex !== -1) {
			cartItems[isItemPresentIndex]["count"] =
				cartItems[isItemPresentIndex]["count"] + 1;
		} else {
			cartItems.push({
				name: name,
				image: image,
				gen: gen,
				flag: flag,
				price: price,
				count: 1,
			});
		}
		// console.log(cartItems);
	};

	return (
		<div className="item">
			<img className="item-image" src={image} alt="product-1" />
			<h2>{name}</h2>
			<p>{gen}</p>
			<p className="flags">{flag}</p>
			<p>{price}</p>
			<button
				onClick={() => addHandler(image, name, gen, flag, price)}
				className="item-btn"
			>
				Add to cart
			</button>
		</div>
	);
};

export default Item;

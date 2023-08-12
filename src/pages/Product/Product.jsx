import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import { useState } from "react"
import "./Product.scss"

export const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0)
	const [quantity, setQuantity] = useState(0)

	const images = [
		"https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		"https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	]

	return (
		<div className='product'>
			<div className='left'>
				<div className='images'>
					<img src={images[0]} alt='' onClick={() => setSelectedImg(0)} />
					<img src={images[1]} alt='' onClick={() => setSelectedImg(1)} />
				</div>
				<div className='mainImg'>
					<img src={images[selectedImg]} alt='' />
				</div>
			</div>
			<div className='right'>
				<h1>Title</h1>
				<span>$199</span>
				<p>
					Minim velit sed dolor veniam eu aliquip non proident veniam dolore dolor cupidatat irure.
					Non ad consequat incididunt ea exercitation consequat consequat cillum nulla duis ipsum
					esse dolore. Quis amet minim cupidatat aliqua pariatur esse enim commodo laboris veniam do
					sed ea aliquip eu nulla consequat. Sit sint nulla sed cupidatat irure incididunt do non
					officia reprehenderit nulla.
				</p>
				<div className='quantity'>
					<button onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}>-</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className='add'>
					<AddShoppingCartIcon />
					ADD TO CART
				</button>
				<div className='links'>
					<div className='item'>
						<FavoriteBorderIcon />
						ADD TO WISHLIST
					</div>
					<div className='item'>
						<BalanceIcon />
						ADD TO COMPARE
					</div>
				</div>
				<div className='info'>
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className='info'>
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	)
}

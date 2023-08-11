import { Card } from "../Card/Card"
import PropTypes from "prop-types"
import "./FeaturedProducts.scss"

export const FeaturedProducts = ({ productType }) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},

		{
			id: 2,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrgb&w-1600",
			title: "Hat",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrgb&w-1600",
			title: "Hat",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrgb&w-1600",
			title: "Hat",
			oldPrice: 19,
			price: 12,
		},
	]

	return (
		<div className='featuredProducts'>
			<div className='top'>
				<h1>{productType} products</h1>
				<p>
					Sunt dolore ipsum pariatur nisi nisi officia commodo cupidatat nisi consequat sed aliqua
					consectetur. Tempor laboris esse culpa officia laboris enim occaecat est adipiscing ex
					sed. Ex pariatur velit dolor esse aute veniam occaecat tempor sed dolor tempor voluptate
					consectetur velit exercitation nostrud aliquip et nostrud. Aliquip nisi nostrud in magna
					id est nulla minim duis dolore. Laboris id nisi incididunt amet anim exercitation proident
					occaecat id.
				</p>
			</div>
			<div className='bottom'>
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

FeaturedProducts.propTypes = {
	productType: PropTypes.string,
}

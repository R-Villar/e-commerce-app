import { Categories } from "../../components/Categories/Categories"
import { Contact } from "../../components/Contact/COntact"
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts"
import { Slider } from "../../components/Slider/Slider"
import "./Home.scss"

export const Home = () => {
	return (
		<div className='home'>
			<Slider />
			<FeaturedProducts productType='featured' />
            <Categories />
			<FeaturedProducts productType='trending' />
            <Contact />
		</div>
	)
}

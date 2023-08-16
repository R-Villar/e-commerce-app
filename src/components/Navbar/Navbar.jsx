import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from "react-router-dom"
import "./Navbar.scss"
import { useState } from "react"
import { Cart } from "../Cart/Cart"

export const Navbar = () => {
	const [openCart, setOpenCart] = useState(false)

	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<div className='item'>
						<img src='/img/en.webp' alt='english' />
						<KeyboardArrowDownIcon />
					</div>
					<div className='item'>
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className='item'>
						<Link className='link' to='/products/1'>
							Woman
						</Link>
					</div>
					<div className='item'>
						<Link className='link' to='/products/2'>
							Men
						</Link>
					</div>
					<div className='item'>
						<Link className='link' to='/products/3'>
							Children
						</Link>
					</div>
				</div>
				<div className='center'>
					<Link className='link' to='/'>
						Remy Store
					</Link>
				</div>
				<div className='right'>
					<div className='item'>
						<Link className='link' to='/'>
							Homapage
						</Link>
					</div>
					<div className='item'>
						<Link className='link' to='/'>
							About
						</Link>
					</div>
					<div className='item'>
						<Link className='link' to='/'>
							Contact
						</Link>
					</div>
					<div className='item'>
						<Link className='link' to='/'>
							Stores
						</Link>
					</div>
					<div className='icons'>
						<SearchIcon />
						<PersonOutlineOutlinedIcon />
						<FavoriteBorderOutlinedIcon />
						<div className='cartIcon' onClick={() => setOpenCart(!openCart)}>
							<ShoppingCartOutlinedIcon />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
			{openCart && <Cart />}
		</div>
	)
}

import React, { useState } from 'react';
import { Container, MenuNav } from './styles';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
	const [nav, setNav] = useState(false);
	const cars = useSelector(selectCars);
	// console.log(cars);

	return (
		<Container>
			<a href="#">
				<img src="/images/logo.svg" alt="/" />
			</a>
			<div className="menu">
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="#">
							{car}
						</a>
					))}
			</div>
			<div className="right--menu">
				<a href="#">Shop</a>
				<a href="#">Account</a>
				<AiOutlineMenu size={20} className="menu--icon" onClick={() => setNav(true)} />
			</div>
			<MenuNav show={nav}>
				<AiOutlineClose size={20} className="close--icon" onClick={() => setNav(false)} />
				{cars &&
					cars.map((car, index) => (
						<li key={index}>
							<a href="#">{car}</a>
						</li>
					))}
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-In</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
				<li>
					<a href="#">Roadaster</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
				{/* <li>
					<a href="#">Powerwall</a>
				</li>
				<li>
					<a href="#">Commercial Energy</a>
				</li> */}
			</MenuNav>
		</Container>
	);
}

export default Header;

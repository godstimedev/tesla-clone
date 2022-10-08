import styled from 'styled-components';

export const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	.menu {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		a {
			font-weight: 600;
			text-transform: uppercase;
			padding: 0 10px;
			flex-wrap: nowrap;
		}
		@media (max-width: 768px) {
			display: none;
		}
	}
	.right--menu {
		display: flex;
		align-items: center;
		a {
			font-weight: 600;
			text-transform: uppercase;
			margin-right: 10px;
		}
		.menu--icon {
			cursor: pointer;
		}
	}
`;

export const MenuNav = styled.ul`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	width: 300px;
	z-index: 20;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${({ show }) => (show ? 'translateX(0%)' : 'translateX(100%)')};
	transition: transform 0.2s;
	.close--icon {
		align-self: flex-end;
		cursor: pointer;
	}
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		a {
			font-weight: 600;
		}
	}
`;

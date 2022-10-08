import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
`;

export const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	/* background-image: url('/images/model-s.jpg'); */
	background-image: ${(props) => `url("/images/${props.bgImg}")`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.text {
		text-align: center;
		padding-top: 15vh;
	}
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5px;
		.buttons {
			display: flex;
			margin-bottom: 30px;
			@media (max-width: 768px) {
				flex-direction: column;
			}
		}
		img {
			margin-top: 20px;
			height: 40px;
			text-align: center;
			overflow-x: hidden;
			animation: animationDown infinite 1.5s;
		}
	}
`;

export const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

export const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`;

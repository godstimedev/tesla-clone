import React from 'react';
import { LeftButton, RightButton, Wrap } from '../styles';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg, arrowSvg }) {
	return (
		<Wrap bgImg={backgroundImg}>
			<Fade bottom>
				<div className="text">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</Fade>
			<div>
				<Fade bottom>
					<div className="buttons">
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</div>
				</Fade>
				{arrowSvg && <img src={`/images/${arrowSvg}`} alt="/" />}
			</div>
		</Wrap>
	);
}

export default Section;

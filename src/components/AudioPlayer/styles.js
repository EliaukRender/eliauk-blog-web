import styled from 'styled-components';

export const AudioPlayerStyles = styled.div`
	display: flex;

	#canvas {
		width: 100%;
		position: absolute;
		bottom: 45px;
		left: 0;
		z-index: 0;
		-webkit-mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 0.9) 100%);
	}
`;

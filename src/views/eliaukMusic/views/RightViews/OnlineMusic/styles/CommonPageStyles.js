import styled from 'styled-components';

export const CommonPageStyles = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 30px 0 30px;
	box-sizing: border-box;
	color: #000000;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	animation: tran 0.3s ease;

	@keyframes tran {
		0% {
			transform: translateX(15px);
		}

		100% {
			transform: translateX(0);
		}
	}

	.song-container {
		height: calc(100% - 90px);
		display: flex;
	}
`;

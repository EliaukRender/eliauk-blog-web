import styled from 'styled-components';

export const MusicCommonPageStyles = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 20px 0 20px;
	box-sizing: border-box;
	color: #000000;
	display: flex;
	flex-direction: column;
	animation: tran 0.3s ease;

	@keyframes tran {
		0% {
			transform: translateX(15px);
		}

		100% {
			transform: translateX(0);
		}
	}
`;

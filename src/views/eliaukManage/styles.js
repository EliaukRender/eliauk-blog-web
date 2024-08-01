import styled from 'styled-components';
import bg from '@/assets/image/fullImgs/bg-1.png';

export const EliaukManageStyles = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding-top: 70px;
	overflow: hidden;
	background-image: url(${bg});
	background-size: cover;
	background-position: center;

	.iframe-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.iframe {
			width: 92%;
			height: 95%;
			border: none;
		}
	}
`;

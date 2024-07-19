import styled from 'styled-components';

export const PlayerLeftStyles = styled.div`
	width: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	box-sizing: border-box;
	padding: 20px 0 0 16px;
	background-color: #f0f0f0;
	color: #515151;

	.logo-area {
		height: 60px;
		display: flex;
		align-items: center;
		padding-bottom: 25px;
		box-sizing: border-box;

		.logo-title {
			margin-left: 10px;
			font-size: 22px;
			font-weight: 600;
			font-family: Alimama;
			color: #333333;
		}
	}
`;

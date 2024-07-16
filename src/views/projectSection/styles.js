import styled from 'styled-components';

export const ProjectSectionStyles = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	padding-top: 70px;
	box-sizing: border-box;

	.project-box {
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.left {
			width: 60%;
		}

		.right {
			width: 40%;
			height: 80%;
			margin-left: 50px;
			padding: 0 80px;
			background-color: #f8f9fa;
			font-size: 16px;
			border-radius: 20px 0 0 20px;
			display: flex;
			align-items: center;
			box-sizing: border-box;
		}
	}
`;

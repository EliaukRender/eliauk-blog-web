import styled from 'styled-components';

export const ProjectSectionStyles = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;

	.project-box {
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.left {
			width: 60%;
			height: 600px;
		}

		.right {
			width: 40%;
			height: 80%;
			margin-left: 50px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			background-color: #f8f9fa;
			font-size: 16px;
		}
	}
`;

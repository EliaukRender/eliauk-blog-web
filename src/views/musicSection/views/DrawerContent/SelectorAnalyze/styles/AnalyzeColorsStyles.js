import styled from 'styled-components';

export const AnalyzeColorsStyles = styled.div`
	.title {
		margin-bottom: 8px;
		font-weight: 600;
	}

	.colors-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		.color-item {
			display: flex;
			justify-content: flex-start;
			margin-right: 40px;
			margin-bottom: 20px;
			position: relative;
			cursor: pointer;

			.color {
				width: 35px;
				height: 28px;
			}
		}

		.icon-duigou {
			position: absolute;
			top: 50%;
			right: -25px;
			transform: translateY(-50%);
		}
	}
`;

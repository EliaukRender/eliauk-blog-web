import styled from 'styled-components';

export const ProjectSectionWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;

	.project-switch {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		cursor: pointer;
		${(props) => props.theme.mixins.boxShadowHover};

		.item {
			width: 180px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			border: 1px solid #333333;
			margin-right: -1px;
			font-size: 16px;
			box-sizing: border-box;

			//&:first-child {
			//	margin-left: 0;
			//}

			&-active {
				background-color: rgba(0, 0, 0, 0.4);
				color: #ffffff;
				font-weight: 600;
			}
		}
	}

	.project-box {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.left {
			width: 60%;

			.img {
				width: 100%;
				height: 30%;
				border-radius: 0 30px 30px 0;
				cursor: pointer;
			}
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

			.text-box {
				width: 600px;
				//margin-top: 300px;
				padding-left: 50px;

				.project-title {
					color: #1f2329;
					font-size: 28px;
					font-weight: 600;
					margin-bottom: 40px;
				}

				.project-web,
				.project-server {
					font-size: 16px;
					margin-bottom: 10px;
					font-weight: 600;
				}

				.project-desc {
					margin-top: 30px;
					line-height: 2;
				}
			}
		}
	}
`;

import styled from 'styled-components';

export const RegisterContentStyles = styled.div`
	flex: 1;

	.register-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px 30px 40px 30px;
		box-sizing: border-box;

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 50px;

			img {
				width: 45px;
				height: 45px;
				margin-right: 10px;
			}

			.text {
				font-size: 40px;
				font-weight: 600;
				background: linear-gradient(45deg, #217166, #fdda6f);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		.sub-title {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			color: #217166;

			.svg-icon {
				margin-right: 10px;
			}
		}

		.ant-form {
			width: 100%;
			margin-top: 20px;

			.ant-btn-primary {
				width: 100%;
				height: 40px;
				margin-top: 10px;
				background: #217166;

				&:hover {
					background: #53a57e;
				}
			}
		}

		.tip-text {
			color: #333333;
			font-size: 14px;
			text-align: center;

			.text {
				color: #217166;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;

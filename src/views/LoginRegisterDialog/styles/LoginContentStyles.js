import styled from 'styled-components';

export const LoginContentStyles = styled.div`
	display: flex;
	height: 500px;

	.left {
		width: 500px;

		img {
			width: 500px;
			border-radius: 15px 0 0 15px;
		}
	}

	.right {
		width: 450px;
		padding: 0 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;

		.title {
			display: flex;
			justify-content: center;
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

		.input-box {
			margin: 20px 0;

			.ant-form-item {
				margin-bottom: 30px;
			}

			.anticon {
				font-size: 18px;
				color: #53a57e;
			}

			.ant-input-prefix {
				margin-right: 10px;
			}

			.ant-input-affix-wrapper {
				height: 40px;
				border-color: #53a57e;
				border-radius: 20px;
				color: #217367;

				.ant-input::placeholder {
					color: #53a57e;
				}
			}
		}

		.ant-btn-primary {
			width: 100%;
			height: 40px;
			background: #217166;

			&:hover {
				background: #53a57e;
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

import styled from 'styled-components';

export const LoginDialogWrapper = styled.div`
	.container {
		width: 1000px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1100;

		background-color: #fff;
		border-radius: 20px;
		display: flex;

		.close {
			position: absolute;
			top: 15px;
			right: 15px;
			cursor: pointer;
			z-index: 1100;

			.anticon-close {
				padding: 5px;
				color: #333333;
				font-size: 18px;

				&:hover {
					color: #ffffff;
				}
			}

			&:hover {
				color: #ffffff;
				border-radius: 5px;
				background-color: #217367;
			}
		}

		.left {
			width: 500px;

			img {
				width: 500px;
				border-radius: 15px 0 0 15px;
			}
		}

		.right {
			width: 500px;
			padding: 0 60px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.box {
				margin: 25px 0;

				.anticon {
					font-size: 18px;
					color: #53a57e;
				}

				.ant-input-prefix {
					margin-right: 10px;
				}

				.ant-input-affix-wrapper {
					height: 40px;
					margin-bottom: 20px;
					border-color: #53a57e;
					border-radius: 20px;
					color: #217367;

					.ant-input::placeholder {
						color: #53a57e;
					}
				}
			}

			.ant-btn-primary {
				height: 40px;
				background: #217166;

				&:hover {
					background: #53a57e;
				}
			}
		}

		/* 公共样式---start */

		.wel {
			font-size: 18px;
			color: #063c40;
		}

		.blog {
			font-size: 40px;
			font-weight: 600;
			background: linear-gradient(45deg, #217166, #fdda6f);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-bottom: 60px;
		}
	}

	.tip {
		margin-top: 30px;
		color: #333333;
		font-size: 14px;
		text-align: center;

		.register {
			color: #217166;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	/* 公共样式---end */

	/* 注册的样式 */

	.container-register {
		box-sizing: border-box;
		padding: 60px 40px;

		.register-box {
			width: 100%;
			height: 100%;

			.blog {
				text-align: center;
				margin-bottom: 30px;
			}

			.wel {
				color: #53a57e;
				text-align: center;
				font-size: 20px;
			}

			.box {
				margin-top: 30px;

				.ant-form-item-control {
					height: 40px;
					line-height: 40px;
					margin-bottom: 20px;
					border-color: #53a57e;
					border-radius: 20px;
					color: #217367;

					.ant-input::placeholder {
						color: #53a57e;
					}
				}
			}

			.btn {
				display: flex;
				justify-content: center;
				margin-top: 80px;

				.ant-btn-primary {
					display: flex;
					justify-content: center;
					width: 400px;
					height: 40px;
					background: #217166;
					text-align: center;

					&:hover {
						background: #53a57e;
					}
				}
			}
		}
	}
`;

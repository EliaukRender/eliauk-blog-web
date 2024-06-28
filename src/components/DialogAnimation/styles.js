import styled from 'styled-components';

export const DialogStyles = styled.div`
	.body {
		min-width: 100px;
		min-height: 100px;

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
	}
`;

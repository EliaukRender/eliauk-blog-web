import styled from 'styled-components';
import { primaryColorRgba } from '@/assets/css/variables';

export const TopHomeBarWrapper = styled.div`
	.top-home-bar {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background-color: ${primaryColorRgba};
		padding: 0 50px;
		color: #ffffff;
		cursor: pointer;

		.logo-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 260px;

			.logo {
				width: 60px;
				border-radius: 50%;
				margin-right: 15px;
			}

			.name {
				font-size: 32px;
				font-weight: 600;
			}
		}

		.bar-box {
			display: flex;
			align-items: center;
			font-size: 22px;

			.item {
				margin: 0 20px;
			}

			.active {
				font-weight: 600;
			}
		}

		.login-box {
			width: 260px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 18px;

			.item {
				margin: 0 10px;
			}
		}
	}
`;

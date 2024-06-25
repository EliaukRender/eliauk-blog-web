import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { french_Cool_blue, french_Cool_light_gray, mld_blue_one } from '@/assets/css/variables';

export const TopHomeBarWrapper = styled.div`
	width: 100%;

	.top-home-bar {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		background: linear-gradient(45deg, ${hexToRgba(mld_blue_one, 0.9)}, ${hexToRgba(french_Cool_blue, 0.9)});
		padding: 0 50px;
		color: ${french_Cool_light_gray};
		box-sizing: border-box;

		.logo-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 260px;
			cursor: pointer;

			.logo {
				width: 55px;
				border-radius: 50%;
				margin-right: 15px;
			}

			.name {
				font-size: 28px;
				font-weight: 600;
			}
		}

		.bar-box {
			display: flex;
			align-items: center;
			font-size: 18px;
			cursor: pointer;
			height: 100%;

			.item {
				height: 100%;
				position: relative;
				padding: 0 20px;
				display: flex;
				justify-content: center;
				align-items: center;

				&:hover {
					background-color: ${mld_blue_one};
					color: #ffffff;
				}

				.active-bar {
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 20px;
					height: 3px;
					border-radius: 2px;
					background-color: ${french_Cool_light_gray};
				}
			}

			.active {
				font-weight: 600;
			}
		}
	}
`;

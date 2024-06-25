import styled from 'styled-components';
import { french_Cool_blue, mld_blue_one } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const NavigationBarWrapper = styled.div`
	position: fixed;
	right: -60px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 20px;
	font-weight: 600;
	z-index: 999;

	display: flex;
	flex-direction: column;
	align-items: center;

	.anticon {
		color: ${french_Cool_blue};
	}

	.anticon-up,
	.anticon-down {
		padding: 10px;
		font-size: 20px;
		cursor: pointer;
	}

	.bar-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 55px;
			height: 55px;
			margin-top: -1px;
			padding: 15px;
			border: 1px solid ${mld_blue_one};
			cursor: pointer;
			box-sizing: border-box;

			&:nth-child(2) {
				border-radius: 10px 10px 0 0;
			}

			&:nth-last-child(2) {
				border-radius: 0 0 10px 10px;
			}

			&-active {
				font-weight: 600;
				background: ${hexToRgba(french_Cool_blue, 0.7)};

				.anticon {
					color: #ffffff;
				}
			}
		}
	}
`;

import styled from 'styled-components';
import { french_Cool_blue, mld_blue_one } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const LoginRegisterWrapper = styled.div`
	width: 260px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 14px;

	.login-box {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
		width: 115px;
		height: 54px;
		border-radius: 27px;
		border: 1px solid ${mld_blue_one};
		background-color: ${hexToRgba(mld_blue_one, 0.6)};
		cursor: pointer;
		box-sizing: border-box;

		.anticon-menu {
			margin-left: 8px;
			font-size: 18px;
		}

		img {
			width: 45px;
		}

		.popover {
			position: absolute;
			top: 70px;
			right: 0;
			padding: 10px;
			border-radius: 8px;
			background-color: #ffffff;
			color: ${french_Cool_blue};
			font-size: 16px;

			.item {
				width: 100px;
				padding: 0 15px;
				height: 35px;
				line-height: 35px;
				text-align: left;

				&:hover {
					background-color: ${hexToRgba(mld_blue_one, 0.6)};
					border-radius: 8px;
					color: #ffffff;
					font-weight: 600;
				}
			}
		}
	}
`;

import styled from 'styled-components';
import { french_Cool_blue, french_Cool_light_gray, mld_blue_one } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const UserInfoAreaStyles = styled.div`
	width: 260px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 14px;
	z-index: 99;
	position: relative;

	.login-box {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
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
	}

	.popover {
		position: absolute;
		top: 70px;
		right: 0;
		padding: 10px;
		border-radius: 8px;
		color: ${french_Cool_blue};
		font-size: 16px;
		z-index: 99;
		box-sizing: border-box;
		background-color: #fafafa;

		.item {
			width: 100px;
			padding: 0 15px;
			height: 35px;
			line-height: 35px;
			text-align: left;
			cursor: pointer;
			border-radius: 8px;

			&:hover {
				background-color: ${hexToRgba(mld_blue_one, 0.6)};
				border-radius: 8px;
				color: #ffffff;
				font-weight: 600;
			}
		}
	}
`;

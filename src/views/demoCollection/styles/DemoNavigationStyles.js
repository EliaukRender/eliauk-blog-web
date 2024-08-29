import styled from 'styled-components';
import { french_Cool_blue, french_Cool_light_gray, mld_blue_one } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const DemoNavigationStyles = styled.div`
	width: 300px;
	height: 100%;
	box-sizing: border-box;
	font-size: 18px;
	padding: 20px;

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-y: auto;
		background-color: #fff;
		border-radius: 8px;

		.cmp-name {
			height: 50px;
			line-height: 50px;
			cursor: pointer;
			padding: 0 20px;

			&:hover {
				background-color: ${french_Cool_light_gray};
			}
		}

		.active {
			color: #ffffff;
			font-weight: 600;
			background: linear-gradient(
				45deg,
				${hexToRgba(mld_blue_one, 0.5)},
				${hexToRgba(french_Cool_blue, 0.3)}
			) !important;
		}
	}
`;

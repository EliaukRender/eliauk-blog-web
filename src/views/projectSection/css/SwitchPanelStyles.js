import styled from 'styled-components';
import { mld_blue_two, primaryColor } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const SwitchPanelStyles = styled.div`
	.project-switch {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: ${hexToRgba(mld_blue_two, 0.5)};
		padding: 10px;
		gap: 10px;
		border-radius: 35px;
		font-size: 18px;
		${(props) => props.theme.mixins.boxShadowHover};

		.item {
			width: 200px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: #ffffff;
			border-radius: 20px;
			color: ${primaryColor};

			&-active {
				background-color: ${mld_blue_two};
				color: #ffffff;
				font-weight: 600;
			}
		}
	}
`;

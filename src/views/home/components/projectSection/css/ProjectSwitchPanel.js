import styled from 'styled-components';
import { primaryColor, secondaryColor } from '@/assets/css/variables';

export const ProjectSwitchPanelWrapper = styled.div`
	.project-switch {
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		cursor: pointer;

		.item {
			width: 180px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			border: 1px solid ${secondaryColor};
			margin-right: -1px;
			font-size: 16px;
			box-sizing: border-box;

			&:first-child {
				border-radius: 25px 0 0 25px;
			}

			&:last-child {
				border-radius: 0 25px 25px 0;
			}

			&-active {
				background-color: ${primaryColor};
				color: #ffffff;
				font-weight: 600;
			}
		}
	}
`;

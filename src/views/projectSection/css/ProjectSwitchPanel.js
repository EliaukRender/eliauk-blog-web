import styled from 'styled-components';
import { primaryColor, primaryColorRgba } from '@/assets/css/variables';

export const ProjectSwitchPanelWrapper = styled.div`
	.project-switch {
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: rgba(107, 150, 205, 0.2);
		padding: 10px;
		gap: 10px;
		border-radius: 35px;

		.item {
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 16px;
			background-color: #fff;
			border-radius: 25px;
			color: ${primaryColor};

			&-active {
				background-color: ${primaryColorRgba};
				color: #ffffff;
				font-weight: 600;
			}
		}
	}
`;

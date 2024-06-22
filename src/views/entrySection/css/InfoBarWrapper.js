import styled from 'styled-components';
import { primaryColorRgba } from '@/assets/css/variables';

export const InfoBarWrapper = styled.div`
	.personal-info {
		width: 400px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 35px;
		background-color: ${primaryColorRgba};
		margin-bottom: 30px;
		font-weight: 600;
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;
		${(props) => props.theme.mixins.boxShadowHover};

		.name {
			${(props) => props.theme.mixins.hoverCustomScale(1.1)};
		}

		.divider {
			width: 1px;
			height: 20px;
			background-color: #fff;
			margin: 0 20px;
		}

		.anticon {
			margin: 0 10px;
			${(props) => props.theme.mixins.hoverCustomScale(1.3)};
		}
	}
`;

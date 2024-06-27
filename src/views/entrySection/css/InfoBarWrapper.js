import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { french_Cool_light_gray, mld_blue_one } from '@/assets/css/variables';

export const InfoBarWrapper = styled.div`
	z-index: 10;

	.personal-info {
		max-width: 400px;
		padding: 0 40px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		background-color: ${hexToRgba(mld_blue_one, 0.6)};
		font-weight: 600;
		font-size: 22px;
		color: ${french_Cool_light_gray};
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

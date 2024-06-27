import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { mld_blue_one } from '@/assets/css/variables';

export const NextPageBtnWrapper = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	z-index: 10;
	transform: translate(-50%);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${hexToRgba(mld_blue_one, 0.6)};
	cursor: pointer;
	color: #eaeaea;
	font-size: 24px;
	${(props) => props.theme.mixins.boxShadowHover};
	animation: move-up 2s linear;

	@keyframes move-up {
		from {
			opacity: 0.4;
			bottom: 10px;
		}
		to {
			opacity: 1;
			bottom: 30px;
		}
	}
`;

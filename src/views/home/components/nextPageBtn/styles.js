import styled from 'styled-components';
import { primaryColorRgba } from '@/assets/css/variables';

export const NextPageBtnWrapper = styled.div`
	position: fixed;
	bottom: 50px;
	left: 50%;
	transform: translate(-50%);
	z-index: 99999;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${primaryColorRgba};
	cursor: pointer;
	color: #ffffff;
	font-size: 24px;
	opacity: ${(props) => props.opacity};
	${(props) => props.theme.mixins.boxShadowHover}
`;

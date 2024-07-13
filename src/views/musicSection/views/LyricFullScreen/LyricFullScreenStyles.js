import styled from 'styled-components';
import { french_Cool_light_gray } from '@/assets/css/variables';

export const LyricFullScreenStyles = styled.div`
	/* 对于父级元素元素是定位 */
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: calc(100% - 80px);
	background: linear-gradient(to top, #484f50 0%, #1d2529 50%, #0f2f41 100%);
	opacity: 0;
	transition: opacity 0.3s ease;
	pointer-events: none; /* 让鼠标事件穿透 */

	/* 对于子集元素是flex */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.icon-xiajiantou {
		position: absolute;
		left: 30px;
		top: 30px;
		cursor: pointer;
		padding: 5px;
		color: ${french_Cool_light_gray};

		&:hover {
			color: #00cc65;
		}
	}

	.main-body {
		width: 100%;
		height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #eaeaea;
	}
`;

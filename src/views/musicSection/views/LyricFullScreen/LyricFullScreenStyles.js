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

	.body {
		width: 100%;
		height: 100%;
		position: relative;
	}

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

	.max-full {
		position: absolute;
		right: 30px;
		top: 30px;
		cursor: pointer;
		padding: 5px;
		display: flex;
		align-items: center;

		.iconfont {
			color: ${french_Cool_light_gray};
			margin-left: 15px;

			&:hover {
				color: #00cc65;
			}
		}
	}

	.main-body {
		width: 100%;
		height: calc(100% - 160px); // 160px是频谱图的高度
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 100px;
		color: #eaeaea;
		box-sizing: border-box;
	}

	.analyze-canvas {
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
	}
`;

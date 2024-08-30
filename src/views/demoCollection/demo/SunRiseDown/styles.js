import styled from 'styled-components';
import { CommonDemoStyles } from '@/views/demoCollection/styles/CommonDemoStyles';

export const SunRiseDownStyles = styled(CommonDemoStyles)`
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		.container {
			position: relative;
			width: 600px;
			height: 400px;
			margin-bottom: 30px;
			animation: dayRise 1s var(--delay-time) linear forwards paused;

			.sun {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				transform-origin: 300px 300px 0; /* 旋转时的圆形中心点 */
				/* 初始状态时，太阳因为延迟--duration=-0.5s，所以动画已经播放了50%然后暂停了 */
				animation: sunDay 1s var(--delay-time) linear forwards paused;
			}
		}

		/* 太阳动画 */
		@keyframes sunDay {
			0% {
				transform: rotateZ(0deg);
				background: #eda404;
				box-shadow: 0 0 20px 5px #eda404;
			}
			50% {
				transform: rotateZ(45deg);
				background: #ed3102;
				box-shadow: 0 0 20px 5px #ed3102;
			}
			100% {
				transform: rotateZ(90deg);
				background: #cccccc;
				box-shadow: 0 0 20px 5px #cccccc;
			}
		}
	}

	/* 背景天空动画 */
	@keyframes dayRise {
		0% {
			background: #fdeea9;
		}
		50% {
			background: #cccccc;
		}
		100% {
			background: #000000;
		}
	}
`;

import styled from 'styled-components';
import { primaryColor } from '@/assets/css/variables';

export const DynamicSuccessIconStyles = styled.div`
	width: 100%;
	height: 100%;
	padding: 25px;
	font-size: 14px;
	box-sizing: border-box;

	.title {
		font-size: 18px;
		color: ${primaryColor};
		margin-bottom: 20px;
	}

	.main {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.circle {
			stroke-dasharray: 1194; // 圆的周长
			stroke-dashoffset: 1194; // 虚线长度
			animation: dashOffsetAnimation_circle 1s forwards;
		}

		.tick {
			stroke-dasharray: 350; // 勾的长度
			stroke-dashoffset: 350; // 虚线长度
			animation: dashOffsetAnimation_tick 1s forwards;
		}

		@keyframes dashOffsetAnimation_circle {
			from {
				stroke-dashoffset: 1000; // 从1000变为0就会全部显示出来
			}
			to {
				stroke-dashoffset: 0;
			}
		}

		@keyframes dashOffsetAnimation_tick {
			from {
				stroke-dashoffset: 350;
			}
			to {
				stroke-dashoffset: 0;
			}
		}
	}
`;

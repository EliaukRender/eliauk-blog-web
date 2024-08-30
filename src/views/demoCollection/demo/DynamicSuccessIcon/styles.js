import styled from 'styled-components';
import { CommonDemoStyles } from '@/views/demoCollection/styles/CommonDemoStyles';

export const DynamicSuccessIconStyles = styled(CommonDemoStyles)`
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		.circle {
			stroke-dasharray: 1194; /* 圆的周长 */
			stroke-dashoffset: 1194; /* 虚线初始长度 */
			animation: dashOffsetAnimation_circle 1s forwards;
		}

		.tick {
			stroke-dasharray: 350;
			stroke-dashoffset: 350;
			animation: dashOffsetAnimation_tick 1s forwards;
		}

		@keyframes dashOffsetAnimation_circle {
			from {
				stroke-dashoffset: 1000; /* 从1000变为0就会全部显示出来 */
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

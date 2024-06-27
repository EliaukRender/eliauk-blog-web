import styled from 'styled-components';
import { primaryColor } from '@/assets/css/variables';

export const ProjectImagesStyles = styled.div`
	.ant-carousel {
		.slick-slider {
			.slick-arrow {
				/* 左右箭头 */
				width: 40px;
				height: 50px;
				border-radius: 25px 0 0 25px;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: ${primaryColor};

				&:after {
					top: 18px;
					left: 14px;
					width: 15px;
					height: 15px;
				}
			}

			.slick-dots {
				/* 底部指示器 */
				bottom: 30px;

				li {
					button {
						height: 8px;
						background-color: ${primaryColor};
					}
				}
			}
		}
	}

	.img {
		width: 100%;
		border-radius: 0 30px 30px 0;
		cursor: pointer;
	}
`;

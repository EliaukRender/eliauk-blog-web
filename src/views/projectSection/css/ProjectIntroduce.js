import styled from 'styled-components';
import { primaryColor, secondaryColor } from '@/assets/css/variables';

export const ProjectIntroduceWrapper = styled.div`
	width: 85%;
	padding-left: 50px;

	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${primaryColor};
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 20px;
		cursor: pointer;
		text-align: center;
		${(props) => props.theme.mixins.textGradient};

		.svg-icon {
			margin-right: 10px;
			transition: transform 0.3s ease;

			&:hover {
				transform: scale(1.1);
			}
		}
	}

	.ant-divider {
		width: 60%;
		background-color: ${secondaryColor};
		margin-bottom: 30px !important;
	}

	.sub-title {
		color: ${primaryColor};
		margin-bottom: 30px;
		font-size: 22px;
		text-align: center;
		text-decoration: underline;
		${(props) => props.theme.mixins.textGradient};
	}

	.svg-list {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		.svg-icon {
			cursor: pointer;
			margin-right: 35px;
			margin-bottom: 30px;
			${(props) => props.theme.mixins.hoverCustomScale(1.2)};
		}
	}

	.project-desc {
		margin-top: 30px;
		line-height: 2;
	}
`;

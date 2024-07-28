import styled from 'styled-components';
import { music_green_select, text_gray } from '@/assets/css/variables';

export const NoDataStyles = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.icon {
		height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.iconfont {
		font-size: 120px;
		color: ${music_green_select};
	}

	.text {
		color: ${text_gray};
	}
`;

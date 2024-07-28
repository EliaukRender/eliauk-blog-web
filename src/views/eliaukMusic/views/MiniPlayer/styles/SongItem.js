import styled from 'styled-components';
import { xihuan_red } from '@/assets/css/variables';

export const SongItemStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	line-height: 50px;
	font-size: 14px;

	.left,
	.right {
		display: flex;
		align-items: center;
	}

	.iconfont {
		font-size: 20px;
		margin-left: 10px;
		cursor: pointer;
	}

	.icon-xihuan:hover {
		color: ${xihuan_red};
	}
`;

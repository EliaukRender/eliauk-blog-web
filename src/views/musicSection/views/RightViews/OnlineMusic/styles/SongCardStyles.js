import styled from 'styled-components';
import { music_green, text_gray } from '@/assets/css/variables';

export const SongCardStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 25px;

	.song-name {
		font-size: 14px;
		color: ${text_gray};
		margin-top: 5px;
	}

	.card {
		width: 180px;
		height: 180px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		position: relative;
		cursor: pointer;
	}

	.image {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.icon-icon_qqyinyue {
		position: absolute;
		top: 8px;
		left: 8px;
	}

	.play-btn {
		width: 40px;
		height: 30px;
		position: absolute;
		bottom: 15px;
		left: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${music_green};
		border-radius: 15px;

		.icon-bofang {
			color: #ffffff;
		}
	}
`;

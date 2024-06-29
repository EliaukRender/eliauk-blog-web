import React, { memo } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import PropTypes from 'prop-types';
import BaseModal from '@/components/BaseModal';
import { VideoDialogStyles } from '@/components/VideoDialog/styles';

/**
 * @description: 视频播放弹窗
 */
const VideoDialog = ({ videoDialogVisible, handleCloseVideo, url, poster }) => {
	return (
		<VideoDialogStyles>
			<BaseModal wrapClassName='video-dialog' showModal={videoDialogVisible} width={800} handleCancel={handleCloseVideo} closeIcon={false}>
				<VideoPlayer url={url} poster={poster}></VideoPlayer>
			</BaseModal>
		</VideoDialogStyles>
	);
};

VideoDialog.propTypes = {
	videoDialogVisible: PropTypes.bool, // 弹窗显示或关闭
	handleCloseVideo: PropTypes.func, // 关闭弹窗
	url: PropTypes.string, // 视频地址
	poster: PropTypes.string, // 视频封面
};

export default memo(VideoDialog);

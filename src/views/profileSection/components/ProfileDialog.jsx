import React, { memo } from 'react';
import Dialog from '@/components/DialogAnimation';
import PropTypes from 'prop-types';
import { useProfileAnimation } from '@/views/profileSection/hooks/useProfileAnimation';
import ProfileOneInfo from '@/views/profileSection/components/ProfileOneInfo';

const ProfileDialog = ({ curCardId, handleSelectCardId }) => {
	const scope = useProfileAnimation();

	// 关闭弹窗
	const closeDialog = () => {
		handleSelectCardId(null);
	};

	return (
		<Dialog showDialog={!!curCardId} closeDialog={closeDialog} scope={scope} style={{ clipPath: 'inset(30% 50% 70% 50% round 10px)' }}>
			{curCardId === 1 && <ProfileOneInfo className='one'></ProfileOneInfo>}
		</Dialog>
	);
};

ProfileDialog.propTypes = {
	curCardId: PropTypes.number,
	handleSelectCardId: PropTypes.func
};

export default memo(ProfileDialog);

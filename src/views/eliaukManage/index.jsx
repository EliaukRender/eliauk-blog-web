import React, { memo } from 'react';
import { EliaukManageStyles } from '@/views/eliaukManage/styles';

const eliaukManageUrl = 'http://47.113.177.51:50001';

/**
 * @description: 后台管理系统
 */
const EliaukManage = () => {
	return (
		<EliaukManageStyles>
			<div className='iframe-container'>
				<iframe className='iframe' src={eliaukManageUrl}></iframe>
			</div>
		</EliaukManageStyles>
	);
};

export default memo(EliaukManage);

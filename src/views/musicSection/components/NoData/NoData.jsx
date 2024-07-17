import React, { memo } from 'react';
import { NoDataStyles } from '@/views/musicSection/components/NoData/NoDataStyles';

const NoData = () => {
	return (
		<NoDataStyles>
			<div className='icon'>
				<i className='iconfont icon-yinyuehe'></i>
			</div>
			<div className='text'>暂无歌曲数据~</div>
		</NoDataStyles>
	);
};

export default memo(NoData);

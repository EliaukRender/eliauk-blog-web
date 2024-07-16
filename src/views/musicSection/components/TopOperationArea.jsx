import React, { memo } from 'react';
import { TopOperationAreaStyles } from '@/views/musicSection/styles/TopOperationAreaStyles';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

/**
 * @description:顶部操作栏
 */
const TopOperationArea = () => {
	return (
		<TopOperationAreaStyles>
			<div className='left'>
				<i className='iconfont icon-zuojiantou'></i>
				<i className='iconfont icon-youjiantou'></i>
				<Input rootClassName={'input-search-music'} placeholder='搜索音乐' prefix={<SearchOutlined />} />
			</div>
			<div className='right'>
				<img className='img' src={require('@/assets/image/logo.jpg')} alt='' />
				<div className='username'>EliaukRender</div>
				<i className='iconfont icon-pifu'></i>
				<i className='iconfont icon-shangchuan'></i>
				<i className='iconfont icon-zuixiaohua'></i>
				<i className='iconfont icon-zuidahua'></i>
				<i className='iconfont icon-guanbi'></i>
			</div>
		</TopOperationAreaStyles>
	);
};

export default memo(TopOperationArea);

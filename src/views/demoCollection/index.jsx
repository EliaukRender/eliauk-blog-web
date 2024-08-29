import React, { memo, useState } from 'react';
import { DemoCollectionStyles } from '@/views/demoCollection/styles/DemoCollectionStyle';
import DemoNavigation from '@/views/demoCollection/components/DemoNavigition';
import ShowDemoArea from '@/views/demoCollection/components/ShowDemoArea';
import components from '@/views/demoCollection/demo'; // demo组件集合

const cmpNameList = Object.keys(components).map((name) => name); // 组件名列表

/**
 * @description: 各种demo的集合
 */
const DemoCollection = () => {
	const [curComponentName, setCurComponentName] = useState(cmpNameList.length ? cmpNameList[0] : '');

	const changeComponent = (name) => {
		setCurComponentName(name);
	};

	return (
		<DemoCollectionStyles>
			{/* 导航条 */}
			<DemoNavigation
				cmpNameList={cmpNameList}
				curComponentName={curComponentName}
				changeComponent={changeComponent}></DemoNavigation>
			{/* demo展示区域 */}
			<ShowDemoArea components={components} curComponentName={curComponentName}></ShowDemoArea>
		</DemoCollectionStyles>
	);
};

export default memo(DemoCollection);

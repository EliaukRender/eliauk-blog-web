import React, { memo } from 'react';
import { SelectorAnalyzeStyles } from '@/views/eliaukMusic/views/DrawerContent/SelectorAnalyze/SelectorAnalyzeStyles';
import AnalyzeChart from '@/views/eliaukMusic/views/DrawerContent/SelectorAnalyze/components/AnalyzeChart';
import AnalyzeColors from '@/views/eliaukMusic/views/DrawerContent/SelectorAnalyze/components/AnalyzeColors';

const SelectorAnalyze = () => {
	return (
		<SelectorAnalyzeStyles>
			{/* 选择频谱图mode */}
			<AnalyzeChart></AnalyzeChart>
			{/* 选择颜色 */}
			<AnalyzeColors></AnalyzeColors>
		</SelectorAnalyzeStyles>
	);
};

export default memo(SelectorAnalyze);

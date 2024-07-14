import React, { memo } from 'react';
import { SelectorAnalyzeStyles } from '@/views/musicSection/views/DrawerContent/SelectorAnalyze/SelectorAnalyzeStyles';
import AnalyzeChart from '@/views/musicSection/views/DrawerContent/SelectorAnalyze/components/AnalyzeChart';

const SelectorAnalyze = () => {
	return (
		<SelectorAnalyzeStyles>
			{/* 选择频谱图mode */}
			<AnalyzeChart></AnalyzeChart>
		</SelectorAnalyzeStyles>
	);
};

export default memo(SelectorAnalyze);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import '@/assets/css/index.css'; // 项目css样式
import appTheme from '@/assets/theme/index'; // 项目主题样式
import { ThemeProvider } from 'styled-components'; // css样式共享组件
import store from '@/store/index'; // redux数据
import { Provider } from 'react-redux'; // redux数据共享组件

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* redux数据共享 */}
		<Provider store={store}>
			{/* css样式共享，通过props.theme就可以拿到自定义的样式 */}
			<ThemeProvider theme={appTheme}>
				{/* 异步加载 */}
				<Suspense fallback={'加载中'}>
					{/* Hash路由 */}
					<HashRouter>
						<App />
					</HashRouter>
				</Suspense>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

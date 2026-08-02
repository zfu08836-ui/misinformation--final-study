import React from 'react';
import { createRoot } from 'react-dom/client';
import MyCanvas from './MyCanvas'; // 这里引入了你的 Canvas 文件

// 创建一个 React 根节点并渲染你的 Canvas 组件
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<MyCanvas />);
}
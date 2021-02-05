# 1. 环境搭建
## 1.1 需要安装`Node.js环境`
## 1.2 安装`TypeScript`解析工具包
> `npm install -g typescript`

# 2. 编译运行
## 2.1. 编译为`javascript`文件
> `tsc main.ts`
### 2.1.1. 实时监视并编译
> `tsc --watch main.ts`
## 2.2. 运行
> `node main.js`
## 2.3. 简化执行步骤
### 2.3.1. 安装`ts-node`
> `npm install -g ts-node`
### 2.3.1. 运行
> `ts-node main.ts`

# 3. 断点调试配置
## 3.1. 点击左侧debug按钮
## 3.2. 打开下拉栏，选择添加配置
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${workspaceFolder}/main.ts"]
    }
  ]
}
```
## 3.3. 在当前目录安装调试所依赖的包
> `npm install typescript ts-node --save`

# 断点调试配置
- 点击左侧debug按钮
- 打开下拉栏，选择添加配置
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
- 在当前目录安装调试所依赖的包
> `npm install typescript ts-node --save`

# Angular常用指令与配置
## 个人常用指令
### 创建模块时顺便生成路由文件
```bash
ng g m views/pages/demoPage --routing
```
### 创建组件时不生成测试文件
```bash
ng generate component my-component --no-spec
```

## 常用配置
### 修改全局组件开头
系统默认的是`app-`，我们通过修改`tslint.json`文件可将默认开头改为我们自己想要的：
```json
// 像这类我们创建默认开头就变成了kt
{
  "extends": "../tslint.json",
  "rules": {
    "directive-selector": [
      true,
      "attribute",
      "kt",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "kt",
      "kebab-case"
    ]
  }
}

```
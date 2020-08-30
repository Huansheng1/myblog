# typescript学习之路
> [官网](https://www.typescriptlang.org/zh/)
## 安装typescript
1. `npm` 安装 `TypeScript`：
```bash
npm install -g typescript
```
2. 运行 `TypeScript` 编译器：
```bash
npx tsc
```
成功结果：![](https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo-img/20200820114551.png)

3. 新建一个`.ts`文件
```bash
touch demo.ts
```
4. 编译`.ts`文件为`.js`文件：
```bash
tsc demo.ts
```
## 开始学习
> [官方手册](https://www.typescriptlang.org/docs/handbook/basic-types.html)

1. 变量可自己手动设置类型`: string` 也可根据 变量值 自动设置 类型，因此 变量类型一旦确定，不可赋予 新类型的值；但是，`: unknown` 表示 我们手动指定 一个不确定的值！
```typescript
let aNumber: number = 1; // 等价于 let aNumber = 1;
aNumber = false; // 报错，类型必须为数字

// 设置未知类型
let notSure: unknown = 4;
notSure = "maybe a string instead";
console.log(notSure)
notSure = false;
console.log(notSure)
```
> `类型注解`：在方法形参也可如此指定类型 - - > `function testFunc(name: string){}`

注意事项：
* `TypeScript`会对代码进行静态的分析 - 分析代码结构和提供的类型注解
* 即使代码出现错误，依旧会编译为`.js`文件，但是，它会警告提示代码运行结果无法保证。


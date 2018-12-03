## Owner-Mobile

### 脚手架
基于dva-cli生成的脚手架

### UI库
[Ant-Design-Mobile](https://mobile.ant.design/docs/react/introduce-cn) (已配置按需加载.webpackrc.js)


### 语法规范
代码commit前都有检测，暂时遵循umi规范

### 任务分配10.15-10.20
+ wyy -- 登录
+ ah  -- 注册
+ wd  -- 主界面，路由
+ lpf -- 常用组件*2【无上限】
+ hw  --  信息列表组件

### 开发流程
+ 每次开发前合入origin master代码【如果从自己仓库拉取，手动添加https://github.com/rivercome并拉取】
+ 每晚离开前在日报上简略写下 个人负责的进度，并提交git【如果没有问题，提交pull request】
#### 韩薇的计划
- 首先在我自己的组件里面实现数据的请求
- 学习共享全局信息
- 理一下实现多个按钮对应同一个组件但是内容是毫无关联的功能如何实现应该动态路由就可以实现
### 开发进程 
- lpf 
待办事项等组件全部完成
- wd
任务
``` 
- I-首页 //完成静态页面 /main 为路由
- J-常用电话 //完成静态页面 /call  完成数据请求.
- J-通知公告 //完成静态页面 /acounce  完成数据请求
- J-物业企业信息 //静态页面完成  /companyinfo   完成数据请求,需要id值
- J-通知公告内容页 //静态页面完成  /anoucecontent  完成了数据请求
- J-小区信息 //静态页面完成  /neighborinfo  完成了
- J-政策规范 // /rules  完成了
- J-政策规范内容页 /rulescontent  需要一个id值
```
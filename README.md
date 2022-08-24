### 前言
目前配置比较简陋，多多客制化。

### 技术栈
- vue3、vue-router@5、pinia，组合式api。
- typescirpt，基于esbuild-loader
- 基于sass的样式系统。
- commintlint、lint-staged、eslint、stylelint

### 配置文件
env/ 目录中配置文件，配置文件被注入到打包过程的NODE_ENV中，详情参考vue-cli中环境变量配置。其中APP_开头的会被注入到definePlugin中。

### 静态资源
vue中静态资源使用Src跳过webpack处理。css中./public开头的总是不会被处理

### vscode扩展
至少安转项目中推荐的扩展提高效率,另外git history、git lens推荐安装。

### CICD
支持项目自动打包和部署到指定静态服务器，目前支持github page 和 gitee部署。

### 项目启动
- `npm run start` 启动开发服务器
- `npm run build` 打包代码
- `npm run debug` 打包开发环境代码到dist目录
- `npm run lint`  格式化eslint 和 stylelint
- `npm run eslint` 格式化eslint
- `npm run stylelint` 格式化stylelint

### 禁止的操作
- 禁止在文件顶部添加作者、修改者等信息。
- 禁止添加忽略注释以跳过lint检查。
- 禁止提交代码时跳过lint检查。
- 合并代码必须使用merge操作，按照rebase的方式合入。

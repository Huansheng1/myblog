#!/usr/bin/env sh
# 执行该文件，bash push.sh，该脚本的用处是将本地项目打包发布到仓库分支，并将最新的推送到git仓库备份
# 终止一个错误
set -e
echo '开始执行一键执行命令'
bash build.sh
bash push.sh
echo '脚本执行完毕'
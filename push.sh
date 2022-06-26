#!/usr/bin/env sh
# 执行该文件，bash push.sh，该脚本的用处是将本地项目推送到git仓库备份
# 终止一个错误
set -e
echo '开始执行命令'
#如果文件夹不存在，创建文件夹
if [ ! -d ".git" ];then
  echo "本地仓库.git文件夹不存在"
  git init
  git remote add origin 'git@github.com:Huansheng1/myblog.git'
  git remote add origin 'git@github.com:Huansheng1/myblog.git'
  git remote add origin-2 'git@github.com:Huansheng1/Huansheng1.github.io.git'
else
  echo "/.git文件夹存在"
fi
echo "执行命令，add所有到暂存区"
git add .
echo "执行命令，commit到本地仓库"
git commit -m 'auto-push'
echo "执行推送命令"
git push
echo '脚本执行完毕，当前路径：'+ $(cd "$(dirname "$0")";pwd)
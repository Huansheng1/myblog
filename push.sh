#!/usr/bin/env sh
# 执行该文件，bash push.sh
# 终止一个错误
set -e
echo '开始执行命令'
#如果文件夹不存在，创建文件夹
if [ ! -d "/.git" ];then
  echo "本地仓库.git文件夹存在"
else
  echo "/.git文件夹不存在"
  git init
  git remote add origin 'git@github.com:Huansheng1/myblog.git'
  git remote add origin 'git@gitee.com:huanshenga/Myblog.git'
fi
echo "执行命令，add所有到暂存区"
git add .
echo "执行命令，commit到本地仓库"
git commit -m 'auto-push'
echo "执行推送命令"
git push
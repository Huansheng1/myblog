#!/usr/bin/env sh
echo '开始执行命令'
#如果文件夹不存在，创建文件夹
if [ ! -d "build-git" ];then
  echo "build-git文件夹不存在，开始创建……"
  mkdir 'build-git'
else
  cd build-git
fi
if [ ! -d ".git" ];then
  echo "build-git/.git文件夹不存在"
  cd -
else
  echo "build-git/.git文件夹存在"
  cd ..
fi
# mkdir 'lalala'
echo '当前路径：'+ $(cd "$(dirname "$0")";pwd)
cd ./dist
echo '当前路径：'+ $(cd "$(dirname "$0")";pwd)
cp -arf .git ../build-git
echo '当前路径：'+ $(cd "$(dirname "$0")";pwd)
#!/usr/bin/env sh
# 执行该文件，bash build.sh，该脚本的用处是项目打包并部署到git仓库静态页
# 终止一个错误
set -e
echo '开始执行命令'
echo '执行命令：vuepress build .'
npm run build
#如果文件夹不存在，创建文件夹
if [ ! -d "build-git" ];then
  echo "build-git文件夹不存在，开始创建……"
  mkdir 'build-git'
else
  echo "执行命令，进入build-git备份git分支gh-pages文件夹"
  cd build-git
fi
if [ ! -d ".git" ];then
  echo "build-git/.git文件夹不存在"
  git init
  git checkout --orphan gh-pages
  git remote add origin git@github.com:Huansheng1/Myblog.git
else
  echo "build-git/.git文件夹存在"
  echo "执行命令，复制备份git分支gh-pages文件夹到dist文件夹"
  cp -r .git ../dist
  cd ..
  echo '当前路径：'+ $(cd "$(dirname "$0")";pwd)
fi
# 进入生成的构建文件夹
echo "执行命令，进入生成的构建文件夹"
cd ./dist
# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME
# git init
echo "执行命令，add所有到暂存区"
git add -A
echo "执行命令，commit到本地仓库"
git commit -m 'auto-deploy'
echo "执行命令，push到静态分支"
git push -f origin gh-pages
echo "执行备份命令，备份git分支gh-pages的.git文件夹到build-git文件夹"
echo '当前路径：'+ $(cd "$(dirname "$0")";pwd)
cp -arf .git ../build-git
# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
echo "回到刚才工作目录"
cd -
echo '脚本执行完毕，当前路径：'+ $(cd "$(dirname "$0")";pwd)
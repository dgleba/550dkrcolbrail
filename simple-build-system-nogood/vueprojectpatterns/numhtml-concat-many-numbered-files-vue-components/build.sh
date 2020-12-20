

# usage:        sh build.sh                # 


# see this for example build..  C:\n\Dropbox\csd\computer\2018\bash353\catmany\cat many files together sorted by filename numerically,know.txt

# assemble files. cat many files together sorted by filename numerically..

# the folder containing the html/css/js code.

dir=appfiles
#
cd $dir
find ./*   | sort -V | xargs cat  > ../dist/app.js
find ./*   | sort -V  > ../dist/codelist.txt
cd ..


# echo 
echo -e '\n Reached end of script.'



#!/bin/bash

# https://stackoverflow.com/questions/1688999/how-can-i-read-a-list-of-filenames-from-a-file-in-bash


# works..

while read F  ; do
  echo ========================= $F =========================
  cat "${F}"
done <flist


echo 
echo ---------------------------------------------
echo 
echo



# https://www.cyberciti.biz/faq/bash-read-file-names-from-a-text-file-and-take-action/

# works..

while IFS= read -r file; do
  echo "Do something on $file ..."
done < "flist"


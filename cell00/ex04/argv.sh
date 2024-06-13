#!/bin/bash

if [ $# -eq 0 ]; then
	echo  "Nenhum argumento fornecido. Por favor, forneça o nome da pasta."
	exit 1
fi

for arg in "$@"; do 
	 folder_name="ex${arg}"
	mkdir "$folder_name"
	echo "Pasta \"$folder_name\" criada."
done

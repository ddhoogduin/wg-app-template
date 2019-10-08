#!/bin/bash


regex='(https?|ftp|file)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]'
string='http://www.google.com/test/link.php'

while [[ true ]];do
    echo "Paste the Directus project API URL: and end with a blank line: "
    url=$(sed '/^$/q' | tr -d ' ')

    if [[ $url =~ $regex ]]
    then
        content=$(curl -L -s ${url})
        if echo ${content} | egrep -q '"public":true'
            then
               echo -e "\nAPI successfully linked!"
               break
            else
                echo "This is not a Directus API URL... try again"
        fi
    else
      echo "This URL does not exist... try again"
    fi
done
read -p "Enter the project name:" project_name
printf "export const baseUrl='${url}';\nexport const projectName='${project_name}';\n" > ../src/config.js
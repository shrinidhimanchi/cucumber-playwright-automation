#!/bin/bash

#Prompt User to Enter Input

menu_selection_for_environment (){
    select env; do
    #Check the selected menu item number
    if [ 1 -le  "$REPLY" ] && [ "$REPLY" -le $# ];
    then
    echo "Environment Selected from the List is : $env"
    break;
    else
    echo "Wrong Selection: Select any number from 1-$#"
    fi
    done
}

menu_selection_for_featureToExecute (){
    select featureName; do
    #Check the selected menu item number
    if [ 1 -le  "$REPLY" ] && [ "$REPLY" -le $# ];
    then
    echo "Feature Selected from the List is : $featureName"
    break;
    else
    echo "Wrong Selection: Select any number from 1-$#"
    fi
    done
}

#Declare the array
env=('development' 'production' 'testing')
menu_selection_for_environment "${env[@]}"

featureName=('test' 'transactions' 'accounts' 'details' 'bla bla...')
menu_selection_for_featureToExecute "${featureName[@]}"


#If any of the parameters are empty OR not supplied. Promot with proper response
if [ -z "$env" ] || [ -z "$featureName" ]

then
    echo "Please provide the above mandatory inputs & try again."
    exit 0
fi

#Begin script in case all parameters are correct
echo "Environment Variable is : $env"
echo "Feature to be executed is : $featureName"

echo "Command Set is : NODE_ENV=$env NODE_TLS_REJECT_UNAUTHORIZED=0 npm run cucumber-$featureName"
NODE_ENV="$env" NODE_TLS_REJECT_UNAUTHORIZED=0 npm run cucumber-"$featureName"
exit 1




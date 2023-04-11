#! /bin/bash

function print_file_run_status() {
  local FILE=$1;
  local STATUS=$FILE ran at $(date);
  echo -e "\n\t$STATUS" ;
}

function is_file_in_pwd() {
  ls $1 &> /dev/null;
}

function spinner() {
  tput civis
  echo -en "\r  $1 is running..."
  sleep 0.1
  echo -en "\r  $1 is running..."
  sleep 0.1
  echo -en "\r  $1 is running..."
  sleep 0.1
  echo -en "\r  $1 is running..."
  sleep 0.1
  echo -en "\r  $1 is running..."
  sleep 0.1
  echo -en "\r  $1 is running..."
  sleep 0.1
}

function test() {
  local COMMAND=node;
  local FILE=test/vending-machine-test.js;

  if ! is_file_in_pwd $FILE
  then
    echo "$FILE is not present in PWD";
    exit 1;
  fi;

  local PREVIOUS_MODIFIED_TIME="$(date -r "$FILE")";

  while true
    spinner $FILE;
  do
    local CURRENT_MODIFIED_TIME="$(date -r "$FILE")";

    if [ "$PREVIOUS_MODIFIED_TIME" != "$CURRENT_MODIFIED_TIME" ];
    then
      clear;
      $COMMAND $FILE;
      PREVIOUS_MODIFIED_TIME=$CURRENT_MODIFIED_TIME;
    fi
  done

}

test $1 $2;

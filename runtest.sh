#! /bin/bash

function autorun() {
  local COMMAND=$1
  local SCRIPT_NAME=$2
  local PREVIOUSLY_MODIFIED_TIME=$(date -r $SCRIPT_NAME)

  while [ 1 ]
  do
    local CURRENTLY_MODIFIED_TIME=$(date -r $SCRIPT_NAME)

    if [ "$CURRENTLY_MODIFIED_TIME" !=  "$PREVIOUSLY_MODIFIED_TIME" ]
    then
      clear;
      $COMMAND $SCRIPT_NAME
      echo $CURRENTLY_MODIFIED_TIME;
    fi
    sleep 3;
    PREVIOUSLY_MODIFIED_TIME=$CURRENTLY_MODIFIED_TIME
  done
}

autorun "node" "test/vending-machine-test.js"

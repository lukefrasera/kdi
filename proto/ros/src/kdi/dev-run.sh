#!/usr/bin/env bash

vue-cli-service serve &
sleep 5
NODE_ENV=DEV electron src/elect_app.js &
wait -n
pkill -P $$


#!/usr/bin/env node

basepath=$(cd `dirname $0`;pwd);
workspace=$(cd `dirname $0`;cd ..;pwd);

node "${workspace}/build/scripts/push-changelog.mjs"
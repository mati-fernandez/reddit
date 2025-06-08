#!/bin/bash
find . -type d \( -path ./node_modules -o -path ./dist -o -path './.*' \) -prune -o -print > estructura.txt
#!/bin/bash
echo $(ls -l | grep -E '^-' | wc -l)

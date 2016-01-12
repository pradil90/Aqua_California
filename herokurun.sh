#!/bin/bash
clear
echo "Starting development PUSH"
git add .
echo "Commiting changes locally"
git commit -m "more changes"
echo "Pushing to production-HEROKU"
git push heroku master
echo "Opening the App"
open "http://droughtwatch.herokuapp.com/Drought_flow"

# Weather App
## July 7, 2018
### David Eliason 

## Description

This is an application that used the node module require to fetch data from an API, and another module named yargs to parse command line values to be used for that first API query.

The code does a number of things of interest:
* it uses yargs options to configure the parsing of CLI data
* the logic to use the 'require' module to query the google server using the arguments provided by yargs is bundled up and modularized for a cleaner interface with the main file
* that function/module makes use of a callback function to return either a relevant error message or the successful queried data for the user's viewing
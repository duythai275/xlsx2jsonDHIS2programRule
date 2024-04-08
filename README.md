# Scripting - Convert the xlsx data to json for importing DHIS2 program rules

## Overview

The script is to convert the program rule configurations stored in an Excel (xlsx) file into a JSON file which can be used to import to DHIS2 instance. The primary function will be performed by the xlsx2json.js script.

## Installation

To simply install, run the command:
```
yarn install
```

## Setting up

The Excel file must have 3 sheets named "programRules", "programRuleActions", "programRuleVariables". These sheets are appropriate with the metadata dependencies for the DHIS2 program rules. Here are examples of "programRules", "programRuleActions", and "programRuleVariables" in Excel:

### programRules

| id | name | program | programRuleActions | condition | description | translations |
| --- | --- | --- | --- | --- | --- | --- |
| CUsk70f2QZr | Assign \"No\" to Efficacy threshold control question if adjusted mortality > 80% | {"id":"MN6JwPdaG3E"} | [{"id":"xRO3ar5ixUl"}] | (d2:hasValue('MOSQUITOES_CONE_1_CURR') &&\nd2:hasValue('MOSQUITOES_CONE_1_CURR') &&\nd2:hasValue('MOSQUITOES_CONE_1_CURR') &&\nd2:hasValue('MOSQUITOES_CONE_1_CURR') &&\nd2:hasValue('DEAD_MOSQUITOES_IN_CONE_1_24H_CURR') &&\nd2:hasValue('DEAD_MOSQUITOES_IN_CONE_1_24H_CURR') &&\nd2:hasValue('DEAD_MOSQUITOES_IN_CONE_1_24H_CURR') &&\nd2:hasValue('DEAD_MOSQUITOES_IN_CONE_1_24H_CURR') &&\nd2:hasValue('CONTROL_MOSQUITOES_CURR') &&\nd2:hasValue('DEAD_CONTROL_MOSQUITOES_24H_CURR')) &&\n\n\n((#{DEAD_CONTROL_MOSQUITOES_24H_CURR}*100/#{CONTROL_MOSQUITOES_CURR} < 5 &&\n(100*(#{DEAD_MOSQUITOES_IN_CONE_1_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_2_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_3_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_4_24H_CURR})/(#{MOSQUITOES_CONE_1_CURR} + #{MOSQUITOES_CONE_2_CURR} + #{MOSQUITOES_CONE_3_CURR} + #{MOSQUITOES_CONE_4_CURR}) > 80)) ||\n\n((#{DEAD_CONTROL_MOSQUITOES_24H_CURR}*100/#{CONTROL_MOSQUITOES_CURR} >= 5 && #{DEAD_CONTROL_MOSQUITOES_24H_CURR}*100/#{CONTROL_MOSQUITOES_CURR} < 20) &&\n(100*((100*(#{DEAD_MOSQUITOES_IN_CONE_1_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_2_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_3_24H_CURR} +#{DEAD_MOSQUITOES_IN_CONE_4_24H_CURR})/(#{MOSQUITOES_CONE_1_CURR} + #{MOSQUITOES_CONE_2_CURR} + #{MOSQUITOES_CONE_3_CURR} + #{MOSQUITOES_CONE_4_CURR}))-(#{DEAD_CONTROL_MOSQUITOES_24H_CURR}*100/#{CONTROL_MOSQUITOES_CURR}))/(100-(#{DEAD_CONTROL_MOSQUITOES_24H_CURR}*100/#{CONTROL_MOSQUITOES_CURR})) > 80))) |  |  |

### programRuleActions

| id | programRule | programRuleActionType | dataElement | data | content | translations |
| --- | --- | --- | --- | --- | --- | --- |
| AVZQLYRt2BX | {"id":"fhO3LBLwMXO"} | ASSIGN | {"id":"r6fQAnpUpEv"} | --- | The number of dead mosquitoes 48h after exposure cannot be less than number of dead mosquitoes 24h after exposure. Please, review the data values. | [] |

### programRuleVariables

| id | name | program | dataElement | useCodeForOptionSet | programRuleVariableSourceType | valueType | translations |
| --- | --- | --- | --- | --- | --- | --- | --- |
| n4ZcLzQ9xrI | 24H_CURR | {"id":"MN6JwPdaG3E"} | {"id":"v0USPnqfDrP"} | FALSE | DATAELEMENT_CURRENT_EVENT | TRUE_ONLY | [] |

## Execution

To simply execute the script, run the command:
```
node xlsx2json.js
```
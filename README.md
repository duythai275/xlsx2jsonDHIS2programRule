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
| CUsk70f2QZr | Assign "No" to "Question" | {"id":"MN6JwPdaG3E"} | [{"id":"xRO3ar5ixUl"}] | d2:hasValue('MOSQUITOES_CONE_1_CURR') |  |  |

### programRuleActions

| id | programRule | programRuleActionType | dataElement | data | content | translations |
| --- | --- | --- | --- | --- | --- | --- |
| AVZQLYRt2BX | {"id":"fhO3LBLwMXO"} | ASSIGN | {"id":"r6fQAnpUpEv"} |  |  | [] |

### programRuleVariables

| id | name | program | dataElement | useCodeForOptionSet | programRuleVariableSourceType | valueType | translations |
| --- | --- | --- | --- | --- | --- | --- | --- |
| n4ZcLzQ9xrI | 24H_CURR | {"id":"MN6JwPdaG3E"} | {"id":"v0USPnqfDrP"} | FALSE | DATAELEMENT_CURRENT_EVENT | TRUE_ONLY | [] |

## Execution

To simply execute the script, run the command:
```
node xlsx2json.js
```
const xlsx = require("xlsx");
const writejson = require("writejson");

const workbook = xlsx.readFile("./data.xlsx");
const sheetNames = workbook.SheetNames;

let jsonData = {};

const isJSON = text => {
    try {
        JSON.parse(text);
        return true;
    }
    catch (error) {
        return false;
    }
}

sheetNames.forEach( sheetName => {
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]).map( row => {
        let newRow = {};
        Object.entries(row).forEach(([key, value]) => {
            const newValue = isJSON(value) ? JSON.parse(value) : value.replaceAll("\\","");
            newRow = {
                ...newRow,
                [key]: newValue
            }
        });
        return newRow;
    });
    jsonData = {
        ...jsonData,
        [sheetName]: sheetData
    };
});

writejson("./jsonData.json", jsonData );
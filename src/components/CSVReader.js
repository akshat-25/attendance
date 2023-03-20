import React from "react";
import { useState } from "react";
import Papa from "papaparse";

const CSVReader = () => {
  const [csvData, setCsvData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  let today = new Date();

  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  const handleFileSelect = async (event) => {
    const file = event.target.value;
    setSelectedFile(file);

    const response = await fetch(`/files/${file}`);
    const csvString = await response.text();
    const { data } = Papa.parse(csvString, { header: true });
    setCsvData(data);
  };

  const fileList = [];
  fileList.push(date + ".csv");
  for (let i = 1; i <= 10; i++) {
    const previousDate = new Date(today); // create a new date object for the previous day
    previousDate.setDate(today.getDate() - i); // set the date to i days before today
    const formattedDate =
      previousDate.getDate() +
      "-" +
      parseInt(previousDate.getMonth() + 1) +
      "-" +
      previousDate.getFullYear() +
      ".csv"; // format the date as DD-MM-YYYY
    fileList.push(formattedDate); // add the formatted date to the array
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="csv-file"
          className="text-white text-2xl block font-medium mb-2"
        >
          Select a Date :
        </label>
        <select
          id="csv-file"
          className="py-2 px-4 bg-gray-100 border border-gray-400 rounded"
          onChange={handleFileSelect}
          value={selectedFile || ""}
        >
          <option value="" disabled>
            -- Select a Date --
          </option>
          {fileList.map((file) => (
            <option key={file} value={file}>
              {file}
            </option>
          ))}
        </select>
      </div>

      {csvData && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {Object.keys(csvData[0]).map((key) => (
                <th
                  key={key}
                  className="px-4 py-2 bg-gray-100 border border-gray-400 uppercase  text-left text-xl font-medium text-gray-700"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-300" : "bg-white"}>
                {Object.values(row).map((value, j) => (
                  <td
                    key={j}
                    className="px-4 py-2 border border-gray-400 capitalize text-lg font-medium text-gray-700"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CSVReader;

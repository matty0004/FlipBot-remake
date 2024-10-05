const fs = require('fs').promises;
const path = require('path');

let userPointsMap = new Map();
let quizAttemptsMap = new Map();

// File path for storing data
const dataPath = './src/quiz-data';
const userPointsPath = path.join(dataPath, 'userPoints.json');
const quizAttemptsPath = path.join(dataPath, 'quizAttempts.json');

// Function to read JSON file and parse it
const readJsonFile = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error(`Error reading JSON file (${filePath}):`, err.message);
    return {};
  }
};

// Function to write data to JSON file
const writeJsonFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data), 'utf8');
    console.log(`Data saved to file (${filePath}).`);
  } catch (err) {
    console.error(`Error writing data to JSON file (${filePath}):`, err.message);
  }
};

// Function to save data to the file
const saveDataToFile = async () => {
  await writeJsonFile(userPointsPath, [...userPointsMap]);
  await writeJsonFile(quizAttemptsPath, [...quizAttemptsMap]);
};

// Function to load data from the file
const loadDataFromFile = async () => {
  const loadedUserPoints = await readJsonFile(userPointsPath);
  const loadedQuizAttempts = await readJsonFile(quizAttemptsPath);

  // If loaded data is undefined, set it to an empty array
  userPointsMap = new Map(loadedUserPoints);
  quizAttemptsMap = new Map(loadedQuizAttempts);

  console.log('Data loaded from files.');
};

// Export the loaded data and functions
module.exports = {
  userPointsMap,
  quizAttemptsMap,
  saveDataToFile,
  loadDataFromFile,
};

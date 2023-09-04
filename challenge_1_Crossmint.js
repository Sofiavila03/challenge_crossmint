const axios = require('axios');

const API_BASE_URL = 'https://challenge.crossmint.io/api';
const CANDIDATE_ID = '57f26425-fa0e-48f4-bbce-8e4f58b427b9';

async function createPolyanet(row, column) {
  try {
    await axios.post(`${API_BASE_URL}/polyanets`, { row, column, candidateId: CANDIDATE_ID });
    console.log(`Created POLYanet at position (${row}, ${column})`);
  } catch (error) {
    console.error(`Error creating POLYanet at position (${row}, ${column}):`, error.response.data);
  }
}

async function formEquation(size) {
  if (size % 2 === 0) {
    console.error('The size must be odd.');
    return;
  }

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if ((column === row || column === size - 1 - row) && row >= 2 && row <= size - 3) {
        await createPolyanet(row, column);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
}

async function main() {
  try {
    const equisSize = 11;
    await formEquation(equisSize);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();

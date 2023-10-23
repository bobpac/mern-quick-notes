import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
  console.log(`notes-api.js/getAll`);
  return sendRequest(BASE_URL);
}

export function add(noteData) {
  console.log(`notes-api.js/add: noteData = '${noteData}'`);
  return sendRequest(BASE_URL,'POST',noteData);
}
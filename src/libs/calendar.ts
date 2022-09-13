import { google } from 'googleapis';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const KEYFILEPATH = path.join(__dirname, '../../private/calendar.json');

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

export default calendar;

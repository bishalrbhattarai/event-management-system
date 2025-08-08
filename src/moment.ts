import * as moment from 'moment-timezone';
export function momentFunc() {
  const body = {
    startDate: '08/07/2025', // DD/MM/YYYY
    startTime: '14:30', // HH:mm
    endDate: '08/08/2025', // DD/MM/YYYY
    endTime: '18:30', // HH:mm
    timezone: 'Asia/Kathmandu', 
  };
  let result = moment.tz(`${body.startDate} ${body.startTime}`, "YYYY-MM-DD HH:mm:ss", body.timezone).utc().toDate();
//   console.log(result);
}

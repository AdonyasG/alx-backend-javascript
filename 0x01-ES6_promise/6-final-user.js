import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const res = [];
      for (const result of results) {
        if (result.status === 'fulfilled') {
          res.push({ result });
        } else {
          res.push({ status: result.status, value: `Error: ${result.reason.message}` });
        }
      }

      return res;
    });
}

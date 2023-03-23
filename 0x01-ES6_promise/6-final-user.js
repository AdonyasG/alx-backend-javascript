import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const res = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          res.push(value);
        } else {
          res.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return res;
    });
}

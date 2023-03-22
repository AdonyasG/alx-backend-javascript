import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return promises.then((results) => results.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'fulfilled' : 'rejected',
    value: status === 'fulfilled' ? value : value.message, // eslint-disable-line no-nested-ternary
  })));
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  const status = [];

  return Promise.allSettled([sign, upload]).then((values) => {
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        status.push({ status: value.status, value: value.value });
      } else if (value.status === 'rejected') {
        status.push({ status: value.status, value: `${value.reason}` });
      }
    });
    return status;
  });
}

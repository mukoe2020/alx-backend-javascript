import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    return { photo: null, user: null };
  }
  const res = {
    photo,
    user,
  };
  return res;
}
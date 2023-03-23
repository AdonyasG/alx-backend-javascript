import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return Promise.resolve({ photo, user });
  } catch (error) {
    return Promise.resolve({ photo: null, user: null });
  }
}

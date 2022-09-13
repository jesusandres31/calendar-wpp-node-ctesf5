export const formatName = (fullName: string) => {
  let firstName = '';
  firstName = fullName.split(' ')[0];
  return firstName;
};

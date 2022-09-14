export const formatName = (fullName: string) => {
  let str = '';
  str = fullName.trim().toLowerCase().split(' ')[0];
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

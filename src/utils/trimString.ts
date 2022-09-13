export const trimString = (str: string | undefined) => {
  if (str)
    return str
      .toLowerCase()
      .replace(/ /g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  return '';
};

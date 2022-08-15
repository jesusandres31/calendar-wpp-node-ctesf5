const allCalendars = process.env.ALL_CALENDARS;

export const getAllCalendars = (): string[] => {
  if (allCalendars) {
    return JSON.parse(allCalendars) as string[];
  }
  return [];
};

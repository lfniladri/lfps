import dayjs from 'dayjs';

function convertToUTC(date: Date) {
  return date.toISOString();
}

const getUTCToLocalTime = (
  utcTimeString: string,
  format: "DateOnly" | "Complete"
) => {
  const utcDate = new Date(utcTimeString);
  const localTimeString = utcDate.toLocaleString();
  const date = new Date(localTimeString);
  const dayJsDate = dayjs(date);

  if (format === "DateOnly") {
    // Format the date to DD-MMM-YYYY
    const formattedDate = dayJsDate.format('DD/MMM/YYYY');
    return formattedDate;
  } else if (format === "Complete") {
    const formattedDate = dayJsDate.format('DD/MMM/YYYY hh:mm A');
    return formattedDate;
  }
  return localTimeString;
};

export { convertToUTC, getUTCToLocalTime };

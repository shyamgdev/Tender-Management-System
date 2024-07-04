export const formateDate = (dateStr) => {
  // Create a new Date object from the date string
  const date = new Date(dateStr);

  // Define options for date formatting
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  // Format the date to the desired format
  const formattedDate = date.toLocaleString('en-GB', options);

  // Adjust the format to match "25-Jul-2024 03:00 PM"
  const parts = formattedDate.split(', ');
  const datePart = parts[0].split('/').reverse().join('-');
  const timePart = parts[1];

  const finalFormattedDate = `${datePart} ${timePart}`;
  return finalFormattedDate;
};
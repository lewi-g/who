function howManyDays(month) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case 'August':
    case 'October':
    case 'December':
      console.log(`${month} has 31 days`);
      break;
    case "February":
      console.log(`${month} has 28 days except on leap years`);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(`${month} has 30 days`);
      break;
    default:
      console.log(`{month} is not entered in correct format. Please check our entry.`);
  
    }
}

howManyDays();
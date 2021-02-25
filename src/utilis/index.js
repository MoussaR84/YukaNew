import moment from 'moment';
export const getDifferenceBetweenDateAndNow = (date) => {
  const now = moment(new Date()); //todays date
  const scanDate = moment(date); // another date
  const duration = moment.duration(now.diff(scanDate));
  const minutes = Math.floor(duration.asMinutes());
  const hours = Math.floor(duration.asHours());
  const days = Math.floor(duration.asDays());
  const months = Math.floor(duration.asMonths());

  if (months > 1) {
    return months + ' mois';
  } else if (months === 1) {
    return months + ' mois';
  }

  if (days > 1) {
    return days + ' jours';
  } else if (days === 1) {
    return days + ' jour';
  }
  if (hours > 1) {
    return hours + ' hours';
  } else if (hours === 1) {
    return hours + ' heure';
  }
  if (minutes > 1) {
    return minutes + ' minutes';
  } else if (minutes <= 1) {
    return minutes + ' minute';
  }
};

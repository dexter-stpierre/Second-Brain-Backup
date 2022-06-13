function displayElapsedTime(startTime, endTime, timeFormat = 'HH:mm') {
  const startHours = startTime.hours();
  const startMinutes = startTime.minutes();
  const endHours = endTime.hours();
  const endMinutes = endTime.minutes();

  const elapsedHours = endTime.diff(startTime, 'hours')
  const elapsedMinutes = endTime.diff(startTime, 'minutes') - (elapsedHours * 60);

  // const elapsedHours = endHours - startHours;
  // const elapsedMinutes = endMinutes - startMinutes;
  const elapsedT = (elapsedHours * 60) + elapsedMinutes;
  let eplapsedHours = '';
  for (let i = startHours; i <= endHours; i++) {
        eplapsedHours += " [[" + i + ":00]]";
  }

  return `- ${startTime.format(timeFormat)}-${endTime.format(timeFormat)} (${elapsedHours} hour${elapsedHours === 1 ? '' : 's'} and ${elapsedMinutes} minute${elapsedMinutes === 1 ? '' : 's'})(${elapsedT})${eplapsedHours}`
}

module.exports = displayElapsedTime;
// MVP for our solution should be that we can see the times in a day when everyone is available.(Not in a meeting.)

//meetings are stored in an object with integers that represent 30min blocks past 9:00am

//EX. {startTime: 2, endTime: 3 } - meeting from 10:00 – 10:30 am

//our input is an array of multiple meeting time ranges and returns an array of condensed ranges.

// EX. [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

//meeting times are not in order and coming from multiple teams

meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

const mergeRanges = (meetings) => {
  const sortedTimes = meetings.sort((a, b) => {
    return a.startTime - b.startTime || a.endTime - b.endTime;
  });
  console.log(sortedTimes);
};
mergeRanges(meetings);

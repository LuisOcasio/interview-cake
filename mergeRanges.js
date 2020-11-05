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

//With our times being sorted we can conclude which times can be merged
//0,1 - 3,12

const mergeRanges = (meetings) => {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings)); //allows data to/from a web server since it is converted to a string

  //Sorted meetings
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // MergedMeetings
  const mergedMeetings = [sortedMeetings[0]];

  //Iterate our sorted meetings
  sortedMeetings.map((e, i) => {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  });
  return mergedMeetings;
};

console.log(mergeRanges(meetings));

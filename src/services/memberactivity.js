function writeFile(input) {
  const fs = require('fs');
  const fileName = './storage/activityinfo.txt';

  fs.writeFileSync(fileName, input.join('\n'));
}

function readFile() {
  const fs = require('fs');
  const fileName = './storage/activityinfo.txt';

  return fs.readFileSync(fileName).toString().split('\n');
}

function parseString(input) {
  const inputArray = input.split(',');

  return {
    id: inputArray[0],
    numberOfGoodbyes: inputArray[1],
  };
}

function findStoredActivityIndex(id, storedActivity) {
  if (storedActivity !== '' && storedActivity !== undefined) {
    for (let i = 0; i < storedActivity.length; i++) {
      const currentLine = parseString(storedActivity[i]);
      const currentId = currentLine.id;

      if (currentId === id) {
        return i;
      }
    }
  }
  return '';
}

function hasLeftBefore(id, storedActivity) {
  const storedActivityIndex = findStoredActivityIndex(id, storedActivity);

  if (storedActivityIndex !== '' && storedActivityIndex !== undefined) {
    const currentIdMatch = parseString(storedActivity[storedActivityIndex]);

    return currentIdMatch.numberOfGoodbyes;
  }
  return '';
}

function updateStoredActivities(id, currentDepartures, storedActivity) {
  const storedActivityIndex = findStoredActivityIndex(id, storedActivity);

  if (storedActivityIndex !== '' && storedActivityIndex !== undefined) {
    const activity = storedActivity;
    const newValue = `${id},${currentDepartures}`;

    activity[storedActivityIndex].value = newValue;
    writeFile(activity);
  }
}

function addToStoredActivities(id) {
  const fs = require('fs');
  const fileName = './storage/activityinfo.txt';
  const stringToAdd = `${id},1\n`;

  fs.appendFileSync(fileName, stringToAdd);
}

export function sayHello(activity) {
  const id = activity.id;
  const firstName = activity.firstName;
  const storedActivity = readFile();
  const previousDepartures = hasLeftBefore(id, storedActivity);

  if (previousDepartures !== '' && previousDepartures !== undefined) {
    if (previousDepartures === 1) {
      return `Välkommen tillbaka ${firstName}!\nDu har varit här ${previousDepartures} gång tidigare.\nHoppas du stannar längre denna gången! =)`;
    }
    return `Välkommen tillbaka ${firstName}!\nDu har varit här ${previousDepartures} gånger tidigare.\nHoppas du stannar längre denna gången! =)`;
  }
  return `Välkommen hit ${firstName}!\nHoppas du skall trivas!`;
}

export function sayGoodbye(activity) {
  const id = activity.id;
  const firstName = activity.firstName;
  const storedActivity = readFile();
  const previousDepartures = hasLeftBefore(id, storedActivity);

  if (previousDepartures !== '' && previousDepartures !== undefined) {
    const currentDepartures = previousDepartures + 1;

    updateStoredActivities(id, currentDepartures, activity);
    return `Farväl ${firstName}, nu har du lämnat oss ${currentDepartures} gånger.\nMå vi ses snart igen!`;
  }
  addToStoredActivities(id);
  return `Farväl ${firstName}, nu har du lämnat oss för första gången.\nMå vi ses snart igen!`;
}

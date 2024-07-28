// Code your solution here
// Function to find matching drivers based on a case-insensitive match of names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the given string
  function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => driver.startsWith(partialName));
  }
  
  // Function to find drivers whose name property matches the given string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Test cases
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  const driverObjects = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'Houston' },
    { name: 'Sarah', hometown: 'Seattle' },
    { name: 'Bobby', hometown: 'Denver' }
  ];
  
  console.log(findMatching(drivers, 'Bobby')); // Expected output: ['Bobby', 'Bobby']
  console.log(findMatching(drivers, 'Sammy')); // Expected output: ['Sammy']
  console.log(fuzzyMatch(drivers, 'Sa')); // Expected output: ['Sammy', 'Sally', 'Sarah']
  console.log(fuzzyMatch(drivers, 'Bo')); // Expected output: ['Bobby', 'Bobby']
  console.log(matchName(driverObjects, 'Bobby')); // Expected output: [{ name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'Denver' }]
  console.log(matchName(driverObjects, 'Sarah')); // Expected output: [{ name: 'Sarah', hometown: 'Seattle' }]
  
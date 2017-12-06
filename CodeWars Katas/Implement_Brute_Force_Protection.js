// You are tasked with protecting an important application against hackers.
// The first defense you have to implement is brute force protection.
// Some inexperienced (or lazy) hackers may try to break in by simply guessing the admin password over and over again.
// Design a function which will block a login attempt if it comes from an IP address which failed to login 20 times in a row.
// The function will receive a single parameter - an object containing two properties:
// loginAttempt.sourceIP // the IP of the person trying to log in
// loginAttempt.successful // whether the log-in attempt succeeded
// The bruteForceDetected function should return true when the IP should be blocked and false otherwise.
// Note: A successful login should reset the number of counts.

function bruteForceDetected (loginRequest) {
  const ip = loginRequest.sourceIP.toString();
  if (loginRequest.hasOwnProperty(ip)) {
      if (loginRequest.successful) {
          loginRequest.ip = 0;
      } else {
          loginRequest.ip++;
      }
  } else {
    if (loginRequest.successful) {
        loginRequest.ip = 0;
    } else {
        loginRequest.ip = 1;        
    }
  }
  if (loginRequest.ip < 20) {
      return false;
  } else {
      return true;
  }
}

// FAILING -- WIP


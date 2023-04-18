/**
 | This class handles the auto logout on this system
 | It works by listening to user events.
 | These events include, but not limited to: keypress, mousemove, mousedown,touchmove
 | It works by running background checks to check if the user performed an action
 | Any action triggers an event, which in turn resets the timer=0, and the process starts over again and again
 | To disable this feature, uncomment the import on the main.js
 */
import { AuthService } from "../modules/auth";

let timeoutId;
const timeoutInMS = 300000; // 3 minutes -> 5 * 60 * 1000
// const timeoutInMS = 10000; // 3 minutes -> 5 * 60 * 1000
function handleInactive() {
  // Here you want to logout a user and/or ping your token
  if (AuthService.check()) {
    AuthService.timerLogout(
      "Your session has been terminated for security reasons. Sign in again to proceed."
    );
  }
}

function startTimer() {
  // setTimeout returns an ID (can be used to start or clear a timer)
  timeoutId = setTimeout(handleInactive, timeoutInMS);
}

function resetTimer() {
  clearTimeout(timeoutId);
  startTimer();
}
export function setupTimers() {
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);

  startTimer();
}

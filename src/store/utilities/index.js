/** This function is for mocking an API call with Promises. It should be
 * used with hardcoded data.
 * @param time  the amount of time in milliseconds to wait
 * @return      a promise, which passes the time as a parameter
 */
export function promiseTimeout(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

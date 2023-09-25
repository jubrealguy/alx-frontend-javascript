/**
 * Returns the task as a constant string.
 * @return {string} The task string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that something is okay.
 * @return {string} The "is okay" string.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines two strings and returns the result.
 * @return {string} The combined string.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

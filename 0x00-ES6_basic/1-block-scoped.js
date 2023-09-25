/**
 * This function returns an array containing two boolean values.
 *
 * @param {boolean} trueOrFalse - A boolean
 * value that determines the return values.
 * @return {Array<boolean>} An array containing two boolean values.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    return [task, task2];
  }

  return [task, task2];
}

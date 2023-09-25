/**
 * Iterates through an iterable and joins its elements with a separator.
 *
 * @param {Iterable} reportWithIterator - The iterable to iterate through.
 * @return {string} A string containing the joined elements.
 */
export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}

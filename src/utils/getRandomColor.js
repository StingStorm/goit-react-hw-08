export function generateColorById(id) {
  return '#' + ((parseInt(id, 10) * 1234567) % 16777215).toString(16);
}

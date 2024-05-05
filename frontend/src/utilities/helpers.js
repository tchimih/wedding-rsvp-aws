export const convertString = (input) => {
  let result = input.toLowerCase()
  result = result.replace(/ /g, "_")
  result = result.replace(/[^a-z0-9_]/g, "")

  return result ?? input
}

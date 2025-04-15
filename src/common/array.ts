// Basic shuffle (biased)
export const shuffle = <T>(input: T[]): T[] => input.sort(() => Math.random() - 0.5)

// Fisher-Yates shuffle
export const shuffleFY = <T>(input: T[]): T[] => {
  const clone = [...input]
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[clone[i], clone[j]] = [clone[j], clone[i]]
  }
  return clone
}

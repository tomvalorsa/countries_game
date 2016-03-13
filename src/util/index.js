export function capitalise(string) {
  let words = string.split(' ')
  if (words.length === 0) {
    return words[0].slice(0,1).toUpperCase() + words[0].slice(1)
  } else {
    let string = []
    words.forEach(word => {
      string.push(word.slice(0,1).toUpperCase() + word.slice(1))
    })
    return string.join(' ')
  }
}

// improve this
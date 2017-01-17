function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
};

function nowServing(line) {
  // Build a function nowServing. This function should return the first person in line and then remove that individual from the line.
  // If there is nobody in line, it should return "There is nobody waiting to be served!"
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
};

function currentLine(line) {
  if (line.length === 0) {
      return "The line is currently empty."
  } else {
    var i = 0, outp = []

    while (i < line.length) {
      outp.push(`${1+i}. ${line[i]}`)
      i++
    }
    return ["The line is currently:", outp.join(', ')].join(" ")
  }
};

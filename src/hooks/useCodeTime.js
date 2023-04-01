let timer = null

function getCodeTime(time) {
  time.value = 60
  clearInterval(timer)
  timer = setInterval(() => {
    if (time.value > 0) {
      time.value--
    } else {
      clearInterval(timer)
      time.value = 0
    }
  }, 1000);

  return time.value
}

export default getCodeTime
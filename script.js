const worker = new Worker('worker.js')
const sumBtn = document.querySelector('#sumBtn')
const bgBtn = document.querySelector('#bgBtn')

sumBtn.addEventListener("click", (event) => { 
  worker.postMessage('hello, worker')
})

worker.onmessage = function(message) {
  // message is of type MessageEvent
  alert(`The final sum is ${message.data}`)
}

bgBtn.addEventListener("click", event => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green"
  else
    document.body.style.background = "blue"
})
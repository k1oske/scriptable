const w = new ListWidget()
const df = new DateFormatter()

var date = new Date()
var mins = date.getMinutes()

w.addText("minutes: " + date)
w.backgroundColor = Color.lightGray()

console.log(mins)
console.log(date)

w.refreshAfterDate = new Date(date)
w.presentMedium()
Script.setWidget(w)
Script.complete()
const w = new ListWidget()
const df = new DateFormatter()
var date = new Date()
var mins

w.backgroundColor = Color.lightGray()
console.log(date.toDateString)

mins = date.getMinutes()
w.addText("minutes: " + date)
w.refreshAfterDate = new Date(date)

console.log(date)

Script.setWidget(w)
Script.complete()
w.presentMedium()
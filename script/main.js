const w = new ListWidget()
var date = new Date()
var mins = date.getMinutes()

w.addText("minutes: " + mins)
w.backgroundColor = Color.lightGray()

console.log(mins)
console.log(date)

w.refreshAfterDate = new Date(date)
w.presentMedium()
Script.setWidget(w)
Script.complete()
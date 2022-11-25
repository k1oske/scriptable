const w = new ListWidget()
const df = new DateFormatter()
var date = new Date()

w.backgroundColor = Color.lightGray()
console.log(date)

date = df.date(date.toDateString())
w.addText("minutes: " + date)
w.refreshAfterDate = new Date(date)

console.log(date)

Script.setWidget(w)
Script.complete()
w.presentMedium()
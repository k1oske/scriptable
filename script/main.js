const w = new ListWidget()
const df = new DateFormatter()
var date = new Date

w.backgroundColor = Color.lightGray()

date = df.string(date.toDateString)
w.addText("minutes: " + date)
w.refreshAfterDate = new Date(date)

for (i = 100; i > 0; i--){
    date = df.string(date.toDateString)
    console.log("minutes: " + date)
}

Script.setWidget(w)
Script.complete()
w.presentMedium()
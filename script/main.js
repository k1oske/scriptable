const w = new ListWidget()
var date = new Date

w.backgroundColor = Color.lightGray()

w.addText(date.toString())
w.refreshAfterDate = new Date(date)

for (i = 100; i > 0; i--){
    date = Date.getMinutes()
    console.log("minutes: " + date)
}

Script.setWidget(w)
Script.complete()
w.presentMedium()
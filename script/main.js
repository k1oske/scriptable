const w = new ListWidget()
var now = Date.now()

w.backgroundColor = Color.lightGray()

w.addText(now.toString())
w.refreshAfterDate = new Date(now)

for (i = 100; i > 0; i--){
    now = Date.now()
    console.log(now, i)
}

Script.setWidget(w)
Script.complete()
w.presentMedium()
const w = new ListWidget()
const now = Date.now()
var present = Date.now()

w.backgroundColor = Color.lightGray()

w.addText(now.toString())
w.refreshAfterDate = new Date(now)

while (true){
    present = Date.now()
    console.log(present.toString())
}

Script.setWidget(w)
Script.complete()
w.presentMedium()
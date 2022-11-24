const w = new ListWidget()
const now = Date.now()

w.backgroundColor = Color.lightGray()

w.addText(now.toString())
w.refreshAfterDate = new Date(now)

for (i = 100; i > 0; i--){
    console.log(i)
}

Script.setWidget(w)
Script.complete()
w.presentMedium()
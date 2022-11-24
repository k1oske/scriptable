const w = new ListWidget()
const now = Date.now()

w.backgroundColor = Color.lightGray()

w.addText(now)
w.refreshAfterDate = new Date(now)

Script.setWidget(w)
Script.complete()
widget.presentMedium()
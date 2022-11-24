const widget = new ListWidget()
const now = Date.now()
widget.backgroundColor = Color.lightGray()

widget.addText(Date)
widget.refreshAfterDate = new Date(now + 100)

Script.setWidget(widget)
Script.complete()
widget.presentMedium()
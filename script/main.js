const widget = new ListWidget()
const now = Date.now()

widget.backgroundColor = Color.lightGray()

widget.addText(now.toString())
widget.refreshAfterDate = new Date(now)

Script.setWidget(widget)
Script.complete()
widget.presentMedium()
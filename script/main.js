const widget = new ListWidget()
const now = Date.now()
var time = 0

widget.backgroundColor = Color.lightGray()

time += 1
widget.addText(time.toString())
widget.refreshAfterDate = new Date(now + 100)

Script.setWidget(widget)
Script.complete()
widget.presentMedium()
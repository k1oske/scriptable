const w = new ListWidget()
const now = Date.now()
const df  = new DateFormatter()

w.backgroundColor = Color.lightGray()
df.useShortDateStyle()

w.addText(df.string(now))
w.refreshAfterDate = new Date(now)

Script.setWidget(w)
Script.complete()
widget.presentMedium()
const w = new ListWidget()
const fm = FileManager.iCloud()
const ipath = "/private/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/config.json"

var date = new Date()
var mins = date.getMinutes()
var hours = date.getHours()
var fcont

function rcolor() {
    const clist = [Color.black() ,Color.blue(), Color.brown(),
        Color.clear(), Color.cyan(), Color.darkGray(), Color.gray(),
        Color.green(), Color.lightGray(), Color.magenta(), Color.orange(),
        Color.purple(), Color.red(), Color.yellow()]
    return clist[Math.floor(Math.random() * 14)]
}

if(fm.FileExists(ipath)){
    fcont = fm.readString(ipath)
    fm.writeString(ipath, mins.toString())
}
else{console.log("file does not exit")}

fcont = mins - fcont

w.addText("minutes: " + mins)
w.addText("last refresh: " + fcont + " minutes ago")
w.backgroundColor = rcolor()

w.refreshAfterDate = new Date(date)
w.presentMedium()
Script.setWidget(w)
Script.complete()
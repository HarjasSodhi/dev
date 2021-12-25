let req = indexedDB.open("Notes", 1);
// let req=indexedDB.open("name of db",version of db);

let SelectedOption = document.querySelector("#notes-type");
let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.querySelector("button");
let db;
let viewPlNotes = document.getElementById("placementNotes");
let viewGnNotes = document.getElementById("generalNotes");
let viewClNotes = document.getElementById("collegeNotes");
let clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
    clearDisplayedNotes();
})

viewPlNotes.addEventListener("click", function (e) {
    clearDisplayedNotes();
    getNote("placementNotes")
})
viewGnNotes.addEventListener("click", function (e) {
    clearDisplayedNotes();
    getNote("generalNotes")
})
viewClNotes.addEventListener("click", function (e) {
    clearDisplayedNotes();
    getNote("collegeNotes")
})

btn.addEventListener("click", function () {
    if (title.value == "" || content.value == "") {
        alert("enter all fields please");
        title.value = "";
        content.value = "";
        return;
    }
    let obj = {}
    if (SelectedOption.value == "placementNotes") obj.pid = Date.now();
    if (SelectedOption.value == "generalNotes") obj.gid = Date.now();
    if (SelectedOption.value == "collegeNotes") obj.cid = Date.now();
    obj.title = title.value;
    obj.content = content.value;
    addNote(obj, SelectedOption.value);
    title.value = "";
    content.value = "";
})

req.addEventListener("success", function (e) {
    // alert("DB opening was a success");
    db = req.result;
})
req.addEventListener("upgradeneeded", function (e) {
    //occurs when we create a new db or make new version of a already created DB.
    let accessToDB = req.result;
    accessToDB.createObjectStore("placementNotes", { keyPath: "pid" })
    accessToDB.createObjectStore("generalNotes", { keyPath: "gid" })
    accessToDB.createObjectStore("collegeNotes", { keyPath: "cid" })
    // alert("DB created/created Succesfully ")
})
req.addEventListener("error", function (e) {
    // alert("DB error");
})

function addNote(obj, collectionName) {
    if (!db) return;
    let tx = db.transaction(collectionName, "readwrite");
    let reqObjStr = tx.objectStore(collectionName);
    reqObjStr.add(obj);
}

function getNote(collectionName) {
    if (!db) return;
    let tx = db.transaction(collectionName, "readonly");
    let reqObjStr = tx.objectStore(collectionName);
    let cursorReq = reqObjStr.openCursor();
    let list = document.createElement("ol");
    let storedNotes = document.querySelector(".storedNotes");
    cursorReq.addEventListener("success", function (e) {
        let cursor = cursorReq.result;
        if (cursor) {
            let item = document.createElement("li");
            item.innerHTML = `Title:${cursor.value.title}
            <br>
            Content:${cursor.value.content}`
            list.append(item);
            cursor.continue();
        }
        storedNotes.append(list);
    })
}

function clearDisplayedNotes() {
    let storedNotes = document.querySelector(".storedNotes");
    let list = storedNotes.querySelector("ol");
    if (list) list.remove();
}

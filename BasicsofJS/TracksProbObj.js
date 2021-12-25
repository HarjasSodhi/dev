let collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
}
function updateRecords(object, id, prop, value) {
    if (value == "") {
        delete object[id][prop]
        return object
    }
    if (prop != "tracks") {
        object[id][prop] = value;
    }
    else {
        if (object[id][prop] == undefined) {
            object[id][prop] = value
        }
        else {
            object[id][prop].push(value);
        }
    }
    return object;
}
console.log(updateRecords(collection, 2468, 'artist', ""));
const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = [ "js", "c++", "ruby"]

for (const key in programming) {
    //console.log(programming[key])
    
}

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of America")
map.set('Fr', "France")
map.set('IN', "india")

for (const key in map) {
    console.log(key)// map is not iterative so its not executed
}
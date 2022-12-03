navigator.permissions.query({name : "write-on-clipboard"}).then((result) =>{
    if (result.state == 'granted' || result.state == 'prompt') {
        console.log('Write access granted')

    }
})
console.log("hello")
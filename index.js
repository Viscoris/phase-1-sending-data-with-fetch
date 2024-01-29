// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'Name': `${name}`,
            'Email': `${email}`
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

submitData("Daniel Waghorne", "dwaghorne@hotmail.com")
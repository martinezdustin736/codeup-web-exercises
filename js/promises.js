
function getUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
.then(response => response.json().then(data => {
        console.log(data);
        var latestPush = data[0].created_at
        let date = new Date(latestPush);

        console.log(date.toString());
    }))
}
getUsernames("martinezdustin736")


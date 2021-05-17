const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let emails =users.map(function(user){
//     user = user.email;
//     return user;
// })
//
// console.log(emails)

let emails = users.map(user => user.email);

console.log(emails)


let moreLanguages=users.filter(function(user){
    return user.languages.length>= 3;
})
console.log(moreLanguages)



////////////////////REDUCE METHOD//////////////////////////////////


// let totalYears = users.reduce(function(total,user){
//     return total + user.yearsOfExperience
// }, 0);
// console.log(totalYears);


//////es6 version//////
let totalYears = users.reduce((total, user) => total + user.yearsOfExperience ,0);
console.log(totalYears);
////////////////////////////////////////////


// let emailviareduce = users.reduce(function (accumulator, user){
//     accumulator.push(user.email);
//     return accumulator
// }, []);
//
// console.log(emailviareduce)

// let longestEmail = users.reduce(function (accumulator, user,index,usersArray){
//     if(index === usersArray.length -1){
//         accumulator.push(user.email);
//         accumulator.sort(function(email1, email2){
//             return email2.length - email1.length
//         })
//         return accumulator[0];
//     } else{
//         accumulator.push(user.email);
//         return accumulator
//     }
//
// }, []);
//
// console.log(longestEmail);


/////////////es6///////
const longestEmails = users.reduce((longest, current) =>
    longest.email.length > current.email.length ? longest : current ).email;
console.log(longestEmails)

////////////////////////////////////////


let names = users.reduce(function(accumulator,user){
    accumulator.push(user.name);
    return accumulator;

}, []);
console.log(names);


let usersNames = users.reduce((accumulator, user, index, arr) => {
    if (index === arr.length -1) {
        accumulator += `${user.name}.`;
    } else {
        accumulator += `${user.name}, `;
    }
    return accumulator;
},'Users names are: ');

console.log(usersNames)




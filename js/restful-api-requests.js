let getoptions = {
    mehtod: "GET",
    headers: {
        'Content-Type':'application/json'
    }
}

const getBooks = () => {
    fetch("https://quiet-purring-yellowhorn.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            let htmlStr = "";
            for (let book of books) {
                htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $('#container').html(htmlStr);
        });
}

fetch("https://quiet-purring-yellowhorn.glitch.me/books/1")
.then(resp => resp.json())
.then(book => console.log(book));

/////POST///////////////
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

$('#addPercy').click( () => {

    fetch("https://quiet-purring-yellowhorn.glitch.me/books", postOptions)
    // .then(resp => resp.json())
    // .then(book => console.log(book));
.then(getBooks);
})

//////////PUT//////

let putThis = {
    "title": "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis),
}
fetch("https://quiet-purring-yellowhorn.glitch.me/books/6", putOptions).then(getBooks)




/////////PATCH//////

let patchThis = {
    "title": "Percy Jackson & The Titans Curse",
    "author": {
        "firstName": "Trick",
        "lastName": "Triordan"
    }
};

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
}

fetch("https://quiet-purring-yellowhorn.glitch.me/books/7", patchOptions).then(getBooks)


getBooks()

/////////DELETE/////

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
}

fetch("https://quiet-purring-yellowhorn.glitch.me/books/12", deleteOptions).then(getBooks)


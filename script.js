const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, read) {

    let info = {
        title: title, 
        author: author, 
        pages: pages,
        read: read};

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    let have = "";
    if (!read) {
        have = "not read it yet."
    } else {
        have = "read it."
    }

    myLibrary.push(info);
};

// addBookToLibrary("Game of Thrones", "George R.R Martin", 321, true); // Adds book to array






// New Book

let btn = document.querySelector(".btn");

btn.addEventListener('click', function addBook() {

    let title = prompt("Title : ");
    let author = prompt("Author : ");
    let pages = Number(prompt("Pages: "));
    let read = Boolean(prompt("Read :"));

    addBookToLibrary(title, author, pages, read);

    let wrapper = document.querySelector(".wrapper");

    //Creating cards
    let card = document.createElement("div");
    card.className = "card";
    
    wrapper.appendChild(card);

    let info = document.querySelector('.card');

    for (const [key, value] of Object.entries(myLibrary[0])) {
        info.innerHTML += `${key} : ${value} <br><br>`;
      }

    myLibrary.slice(0, myLibrary.length);
    

});

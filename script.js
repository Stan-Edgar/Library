const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, read) {

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

    myLibrary.push(this.title);
};

addBookToLibrary("Game of Thrones", "George R.R Martin", 321, true); // Adds book to array

console.log(myLibrary);
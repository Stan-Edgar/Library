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
    const card = document.createElement("div");
    //Creating Buttons
    const button = document.createElement("button");
    button.textContent = "Read";
    button.style.cssText = "display: flex; width: 70px; font-size: 10px; height: 30px; align-items: center; border-radius: 5px; border: 0; align-items: center; justify-content: center; background-color: black; color: white; font-weight: 800; cursor: pointer;"
    


    wrapper.appendChild(card);
    card.appendChild(button);
    

    for (const [key, value] of Object.entries(myLibrary[0])) {
        const textElement = document.createElement("p");
        textElement.innerText = `${key}: ${value}`;
        card.appendChild(textElement);
      }

      
    myLibrary.splice(0, myLibrary.length);
    if (myLibrary.length > 1) {
        alert("Error");
    }
    

    //Delete Cards
    button.addEventListener("click" , function () {
        alert("Read!");
    })
   

});




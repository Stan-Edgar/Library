const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages, read) {

    let info = {
        title: title, 
        author: author, 
        pages: pages,
        // read: read
        };

    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.read = read;

    

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
    let read = "";

    addBookToLibrary(title, author, pages, read);

    let wrapper = document.querySelector(".wrapper");

    //Creating cards
    const card = document.createElement("div");
    //Creating Buttons
    const del = document.createElement('button');
    del.textContent = "Remove";
    del.style.cssText = "display: flex; width: 70px; font-size: 10px; height: 30px; align-items: center; border-radius: 5px; border: 0; align-items: center; justify-content: center; background-color: black; color: white; font-weight: 800; cursor: pointer;"
    const button = document.createElement("button");
    button.textContent = "Read";
    button.style.cssText = "display: flex; width: 70px; font-size: 10px; height: 30px; align-items: center; border-radius: 5px; border: 0; align-items: center; justify-content: center; background-color: black; color: white; font-weight: 800; cursor: pointer;"
    
    // Creating button container
    const container = document.createElement('div');
    container.style.cssText = "Display: flex; column-gap: 10px; border: 0; -webkit-box-shadow: 0;";

    wrapper.appendChild(card);


    for (const [key, value] of Object.entries(myLibrary[0])) {
        const textElement = document.createElement("p");
        textElement.innerText = `${key}: ${value}`;
        card.appendChild(textElement);

      }

    card.appendChild(container);
    //Adding buttons
    container.appendChild(button);
    container.appendChild(del);

      
    myLibrary.splice(0, myLibrary.length);
    if (myLibrary.length > 1) {
        alert("Error");
    }
    

    //Delete Cards

    del.addEventListener('click', function() {
        card.remove();
    })

    // Read Cards

    button.addEventListener("click" , function () {

        alert("Read!");
        let readP = document.createElement("p")
        readP.innerText = "Read";
        readP.style.cssText = "padding: 5px; color: white; border-radius: 50px; font-size: 1.1rem; background-color: green;"
        card.appendChild(readP);
        card.style.cssText = "border: 2px solid green;"

        // removes itself
        button.remove();
        
    })
   

});




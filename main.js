// Menyimpan data buku dalam array
let books = [
    {
      id: 1,
      title: "Judul Buku 1",
      author: "Penulis Buku 1",
      year: 2030,
      isComplete: false
    },
    {
      id: 2,
      title: "Judul Buku 2",
      author: "Penulis Buku 2",
      year: 2030,
      isComplete: true
    }
  ];
  
  // Fungsi untuk menampilkan buku
  function displayBooks() {
    const incompleteBookList = document.getElementById("incompleteBookList");
    const completeBookList = document.getElementById("completeBookList");
  
    // Menghapus semua elemen buku sebelumnya
    incompleteBookList.innerHTML = "";
    completeBookList.innerHTML = "";
  
    // Menampilkan buku yang belum selesai dibaca
    books.forEach(book => {
      if (!book.isComplete) {
        const bookItem = document.createElement("div");
        bookItem.setAttribute("data-bookid", book.id);
        bookItem.setAttribute("data-testid", "bookItem");
  
        const title = document.createElement("h3");
        title.setAttribute("data-testid", "bookItemTitle");
        title.textContent = book.title;
  
        const author = document.createElement("p");
        author.setAttribute("data-testid", "bookItemAuthor");
        author.textContent = `Penulis: ${book.author}`;
  
        const year = document.createElement("p");
        year.setAttribute("data-testid", "bookItemYear");
        year.textContent = `Tahun: ${book.year}`;
  
        const buttonContainer = document.createElement("div");
        const completeButton = document.createElement("button");
        completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
        completeButton.textContent = "Selesai dibaca";
        completeButton.addEventListener("click", () => {
          book.isComplete = true;
          displayBooks();
        });
  
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
        deleteButton.textContent = "Hapus Buku";
        deleteButton.addEventListener("click", () => {
          books = books.filter(b => b.id!== book.id);
          displayBooks();
        });
  
        const editButton = document.createElement("button");
        editButton.setAttribute("data-testid", "bookItemEditButton");
        editButton.textContent = "Edit Buku";
        editButton.addEventListener("click", () => {
          // Fungsi edit buku
        });
  
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(editButton);
  
        bookItem.appendChild(title);
        bookItem.appendChild(author);
        bookItem.appendChild(year);
        bookItem.appendChild(buttonContainer);
  
        incompleteBookList.appendChild(bookItem);
      } else {
        const bookItem = document.createElement("div");
        bookItem.setAttribute("data-bookid", book.id);
        bookItem.setAttribute("data-testid", "bookItem");
  
        const title = document.createElement("h3");
        title.setAttribute("data-testid", "bookItemTitle");
        title.textContent = book.title;
  
        const author = document.createElement("p");
        author.setAttribute("data-testid", "bookItemAuthor");
        author.textContent = `Penulis: ${book.author}`;
  
        const year = document.createElement("p");
        year.setAttribute("data-testid", "bookItemYear");
        year.textContent = `Tahun: ${book.year}`;
  
        const buttonContainer = document.createElement("div");
        const uncompleteButton = document.createElement("button");
        uncompleteButton.setAttribute("data-testid", "bookItemIsCompleteButton");
        uncompleteButton.textContent = "Belum selesai dibaca";
        uncompleteButton.addEventListener("click", () => {
          book.isComplete = false;
          displayBooks();
        });
  
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
        deleteButton.textContent = "Hapus Buku";
        deleteButton.addEventListener("click", () => {
          books = books.filter(b => b.id!== book.id);
          displayBooks();
        });
  
        const editButton = document.createElement("button");
        editButton.setAttribute("data-testid", "bookItemEditButton");
        editButton.textContent = "Edit Buku";
        editButton.addEventListener("click", () => {
          // Fungsi edit buku
        });
  
        buttonContainer.appendChild(uncompleteButton);
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(editButton);
  
        bookItem.appendChild(title);
        bookItem.appendChild(author);
        bookItem.appendChild(year);
        bookItem.appendChild(buttonContainer);
  
        completeBookList.appendChild(bookItem);
      }
    });
  }
  
  // Fungsi untuk menambah buku
  function addBook(title, author, year, isComplete) {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      year,
      isComplete
    };
    books.push(newBook);
    displayBooks();
  }
  
  // Menambahkan event listener pada form tambah buku
  document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = document.getElementById("bookFormYear").value;
    const isComplete = document.getElementById("bookFormIsComplete").checked;
    addBook(title, author, year, isComplete);
    document.getElementById("bookForm").reset();
  });
  
  displayBooks();
  //blom fix
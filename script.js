document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost:5000"; // Замість localhost вкажіть адресу сервера
  
    // Головна сторінка: Завантаження книг
    if (window.location.pathname === '/index.html') {
      fetchBooks();
    }
  
    // Сторінка додавання книги
    if (window.location.pathname === '/upload.html') {
      document.getElementById('book-form').addEventListener('submit', addBook);
    }
  
    // Функція для отримання списку книг
    function fetchBooks() {
      fetch(`${baseUrl}/api/books`)
        .then(response => response.json())
        .then(books => {
          const booksList = document.getElementById('books-list');
          booksList.innerHTML = '';
  
          books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-item');
            bookElement.innerHTML = `
              <img src="${book.cover}" alt="Обкладинка книги">
              <h3>${book.title}</h3>
              <p>${book.author}</p>
              <a href="read.html?id=${book.id}">Читати</a>
            `;
            booksList.appendChild(bookElement);
          });
        })
        .catch(error => console.log('Error fetching books:', error));
    }
  
    // Додавання нової книги
    function addBook(event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const author = document.getElementById('author').value;
      const cover = document.getElementById('cover').files[0];
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('author', author);
      formData.append('cover', cover);
  
      fetch(`${baseUrl}/api/books`, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(() => {
        window.location.href = 'index.html';
      })
      .catch(error => console.log('Error adding book:', error));
    }
  
    // Вхід
    if (window.location.pathname === '/login.html') {
      document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const nickname = document.getElementById('nickname').value;
        localStorage.setItem('nickname', nickname);
        window.location.href = 'index.html';
      });
    }
  
    // Сторінка читання книги
    if (window.location.pathname === '/read.html') {
      const bookId = new URLSearchParams(window.location.search).get('id');
      fetch(`${baseUrl}/api/books/${bookId}`)
        .then(response => response.json())
        .then(book => {
          document.getElementById('book-title').textContent = book.title;
          document.getElementById('book-cover').src = book.cover;
          document.getElementById('book-author').textContent = `Автор: ${book.author}`;
          document.getElementById('book-content').textContent = book.content;
        })
        .catch(error => console.log('Error fetching book:', error));
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost/path/to/your/php/scripts"; // Вкажіть шлях до вашого PHP бекенду
  
    // Головна сторінка: Завантаження книг
    if (window.location.pathname === '/index.html') {
      fetchBooks();
    }
  
    function fetchBooks() {
      fetch(`${baseUrl}/get_books.php`)
        .then(response => response.json())
        .then(books => {
          const booksList = document.getElementById('books-list');
          booksList.innerHTML = '';
  
          books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-item');
            bookElement.innerHTML = `
              <img src="${book.Cover}" alt="Обкладинка книги">
              <h3>${book.Title}</h3>
              <p>${book.Author}</p>
              <a href="read.html?id=${book.Id}">Читати</a>
            `;
            booksList.appendChild(bookElement);
          });
        })
        .catch(error => console.log('Error fetching books:', error));
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost/path/to/your/php/scripts"; // Вкажіть шлях до вашого PHP бекенду
  
    if (window.location.pathname === '/upload.html') {
      document.getElementById('book-form').addEventListener('submit', addBook);
    }
  
    function addBook(event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const author = document.getElementById('author').value;
      const cover = document.getElementById('cover').files[0];
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('author', author);
      formData.append('cover', cover);
  
      fetch(`${baseUrl}/add_book.php`, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          window.location.href = 'index.html';
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.log('Error adding book:', error));
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost/path/to/your/php/scripts"; // Вкажіть шлях до вашого PHP бекенду
  
    if (window.location.pathname === '/read.html') {
      const bookId = new URLSearchParams(window.location.search).get('id');
      fetch(`${baseUrl}/get_book.php?id=${bookId}`)
        .then(response => response.json())
        .then(book => {
          document.getElementById('book-title').textContent = book.Title;
          document.getElementById('book-cover').src = book.Cover;
          document.getElementById('book-author').textContent = `Автор: ${book.Author}`;
          document.getElementById('book-content').textContent = book.Content;
        })
        .catch(error => console.log('Error fetching book:', error));
    }
  });
        
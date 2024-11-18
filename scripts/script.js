// Elementos del DOM
const postForm = document.getElementById('postForm');
const postTitleInput = document.getElementById('postTitle');
const postContentInput = document.getElementById('postContent');
const postsContainer = document.getElementById('posts');

// Función para crear un nuevo post
function createPost(title, content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <h4>Comentarios:</h4>
        <div class="comments-container"></div>
        <textarea class="comment-input" placeholder="Escribe un comentario..."></textarea>
        <button class="comment-button">Comentar</button>
    `;

    // Botón para agregar comentarios
    const commentButton = postDiv.querySelector('.comment-button');
    const commentInput = postDiv.querySelector('.comment-input');
    const commentsContainer = postDiv.querySelector('.comments-container');

    // Agregar comentario al post
    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<p>${commentText}</p>`;
            commentsContainer.appendChild(commentDiv);
            commentInput.value = ''; // Limpiar el campo
        }
    });

    // Agregar el post al contenedor de posts
    postsContainer.appendChild(postDiv);
}

// Evento del formulario para crear un nuevo post
postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();

    if (title && content) {
        createPost(title, content);
        postTitleInput.value = '';
        postContentInput.value = '';
    } else {
        alert('Por favor, completa todos los campos');
    }
});


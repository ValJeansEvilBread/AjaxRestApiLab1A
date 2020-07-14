
// get all posts;
let btnCallAll = document.getElementById('ajaxCallAll');
btnCallAll.addEventListener = ("click", ajaxCallAll);
const ajaxCallAll = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	  	.then((response) => response.json())
	  	.then((json) => console.log(json))
}

// get post with id of 10;
let btnCallTen = document.getElementById('ajaxCallTen');
btnCallTen.addEventListener = ("click", ajaxCallTen);
const ajaxCallTen = () => {
	fetch("https://jsonplaceholder.typicode.com/posts/10")
	  .then(response => response.json())
	  .then(json => console.log(json))
}

// get all comments with posts from id of 12
let btnCommentsTwelve = document.getElementById('ajaxCommentsTwelve');
btnCommentsTwelve.addEventListener = ("click", ajaxCommentsTwelve);
const ajaxCommentsTwelve = () => {
	fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
	  .then(response => response.json())
	  .then(json => console.log(json))
}

// get all posts from user id with 12
let btnAllPostsUserTwelve = document.getElementById('ajaxAllPostsUserTwelve');
btnAllPostsUserTwelve.addEventListener = ("click", ajaxAllPostsUserTwelve);
const ajaxAllPostsUserTwelve= () => {
	fetch("https://jsonplaceholder.typicode.com/posts?userid=12")
	  .then(response => response.json())
	  .then(json => console.log(json))
}

// create new post and log the id generated for it by the server
let btnCreatePost = document.getElementById('ajaxCreatePost');
btnCreatePost.addEventListener = ("click", ajaxCreatePost);
const ajaxCreatePost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'joe',
      body: 'demaggio',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// replace post with id of 12 and render the responseJSON
let btnReplacePost = document.getElementById('ajaxReplacePost');
btnReplacePost.addEventListener = ("click", ajaxReplacePost);
const ajaxReplacePost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
	    method: 'PUT',
	    body: JSON.stringify({
	      id: 12,
	      title: 'joe',
	      body: 'mccartney',
	    }),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	})
	  .then(response => response.json())
	  .then(json => console.log(json))
	  .then(json => render(json))
}

// update title of post with id of 12 and render the responseJSON
let btnUpdatePost = document.getElementById('ajaxUpdatePost');
btnUpdatePost.addEventListener = ("click", ajaxUpdatePost);
const ajaxUpdatePost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
	    method: 'PUT',
	    body: JSON.stringify({
	      title: 'paul',
	    }),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
	  .then(response => response.json())
	  .then(json => console.log(json))
	  .then(json => render(json))
}

// delete post with id of 12 and render success message
let btnDeletePost = document.getElementById('ajaxDeletePost');
btnDeletePost.addEventListener = ("click", ajaxDeletePost);
const ajaxDeletePost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/12', {
	  method: 'DELETE',
	})
}

// display a list of all posts;
let btnCallAllTwo = document.getElementById('ajaxCallAllTwo');
btnCallAllTwo.addEventListener = ("click", ajaxCallAllTwo);
const ajaxCallAllTwo = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	  	.then((response) => response.json())
	  	.then((json) => console.log(json))
}








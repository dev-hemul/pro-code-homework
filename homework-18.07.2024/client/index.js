const buttonShow = document.querySelector('.button-show');
const buttonClose = document.querySelector('.button-close');
const mainTitle = document.querySelector('.title');
const mainArticle = document.querySelector('.article');

buttonShow.addEventListener('click', (e) => {
	e.preventDefault();
	const operation = async () => {
	const response = await axios.get('/json');
	const data = response.data;
	const {title,article} = data;
	mainTitle.textContent = title;
	mainArticle.textContent = article;

}

operation();
})

buttonClose.addEventListener('click', (e) => {

	mainTitle.textContent = "";
	mainArticle.textContent = "";

})









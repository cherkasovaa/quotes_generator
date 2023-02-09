const api_url = 'https://type.fit/api/quotes';

const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

btn.addEventListener('click', () => {
  getAPI(api_url);
});

const getAPI = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayQuote(getRandomQuote(data)));
};

const displayQuote = (data) => {
  quote.textContent = data.text;
  author.textContent = getAuthor(data);
};

const getRandomQuote = (data) => {
  const int = getRandomInt(data.length);

  return data[int];
};

const getRandomInt = (length) => {
  return Math.floor(Math.random() * length + 1);
};

const getAuthor = (data) => {
  return data.author ? data.author : 'Unknown';
};

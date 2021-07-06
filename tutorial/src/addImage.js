import Banana from './banana.jpg';
import text from './test.txt';

const addImage = () => {
  const img = document.createElement('img');
  img.alt = text;
  img.width = 300;
  img.src = Banana;

  const text = document.createElement('p');

  const body = document.querySelector('body');
  body.appendChild(img);
};

export default addImage;

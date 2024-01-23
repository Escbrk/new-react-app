import PropTypes, { string } from 'prop-types';
import defaultImage from '../default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title,
  price,
  author = 'Unknown',
  authorUrl,
  quantity,
}) {
  // const {url, title, price, author, authorUrl, quantity} = props

  return (
    <div>
      <img src={imageUrl} alt={title} width="280" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Available: {quantity}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.PropTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  author: PropTypes.string,
  authorUrl: PropTypes.string,
  quantity: PropTypes.number,
};

import PropTypes from 'prop-types';
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
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Available: {quantity < 10 ? 'Low stock' : '✅'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

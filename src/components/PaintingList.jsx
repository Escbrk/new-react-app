import PropTypes from 'prop-types';
import Painting from './Painting';

export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            price={item.price}
            author={item.author.tag}
            authorUrl={item.author.url}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

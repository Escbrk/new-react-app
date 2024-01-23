import Painting from './components/Painting';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        author={paintings[0].author.tag}
        authorUrl={paintings[0].author.url}
        quantity={paintings[0].quantity}
      />

      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        price={paintings[1].price}
        author={paintings[1].author.tag}
        authorUrl={paintings[1].author.url}
        quantity={paintings[1].quantity}
      />

      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        price={paintings[2].price}
        author={paintings[2].author.tag}
        authorUrl={paintings[2].author.url}
        quantity={paintings[2].quantity}
      />
    </div>
  );
}

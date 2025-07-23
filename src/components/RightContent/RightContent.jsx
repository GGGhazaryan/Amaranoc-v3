import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent() {
  return (
    <main className="rightContentWrapper">
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </main>
  );
}

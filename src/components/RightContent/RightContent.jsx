import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent() {
  return (
    <main className="rightContentWrapper" style={{marginTop:"5%"}}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </main>
  );
}

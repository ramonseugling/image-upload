import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const viewImage = (url: string): void => {
    setImgUrl(url);
    onOpen();
  };

  return (
    <SimpleGrid templateColumns="repeat(3, 1fr)" gap="40px">
      {cards.map(card => (
        <Card key={card.id} data={card} viewImage={() => viewImage(card.url)} />
      ))}

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} />
    </SimpleGrid>
  );
}

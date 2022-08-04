import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="auto" w="auto" h="auto" maxW="900px" maxH="600px">
        <ModalBody p="0">
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter
          h="32px"
          borderBottomRadius="5px"
          py="20px"
          bgColor="pGray.800"
          w="100%"
        >
          <Link href={imgUrl} isExternal mr="auto" fontSize="1rem">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}


import {
  Flex,
  Heading,
  Modal as ModalContainer,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import React from 'react';

export interface ModalProps extends ChakraModalProps {
  title: string;
  headerButton?: React.ReactNode;
}

export function Modal({ children, title, headerButton, ...props }: ModalProps) {
  return (
    <ModalContainer blockScrollOnMount={false} {...props}>
      <ModalOverlay bg="blackAlpha.500" />
      <ModalContent
        transform="auto-gpu"
        backdropFilter="blur(8px)"
      >
        <ModalCloseButton />
        <ModalHeader pl="44px" borderTopRadius="md" bg="white" display="flex">
          <Heading fontWeight="bold" fontSize="40px">
            {title}
          </Heading>
          <Flex ml="auto" mr="16px">
            {headerButton}
          </Flex>
        </ModalHeader>

        <ModalBody px="44px" borderBottomRadius="md">
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}

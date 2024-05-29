import NavigationCard from "../components/NavigationCard";
import Layout from "../components/Layout";
import { Modal } from "../components/Modal";
import CreateNewsForm from "../components/CreateNewsForm";
import { useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";

const News = () => {
  const [refreshRequest, setRefreshRequest] = useState<boolean>(false);
  const {
    isOpen: isOpenCreateNewsModal,
    onClose: onCloseCreateNewsModal,
    onOpen: onOpenCreateNewsModal,
  } = useDisclosure();

  return (
    <Layout>
      <NavigationCard 
        title="Criar"
        description="Criar notícia"
        onClick={() => onOpenCreateNewsModal()}
      />
      <Modal
        title={`Criar Notícia`}
        isOpen={isOpenCreateNewsModal}
        onClose={onCloseCreateNewsModal}
        size="4xl"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="16px"
        >
          <CreateNewsForm
            onClose={onCloseCreateNewsModal}
            refreshRequest={refreshRequest}
            setRefreshRequest={setRefreshRequest}
          />
        </Flex>
      </Modal>
    </Layout>
  );
};

export default News;

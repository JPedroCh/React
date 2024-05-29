import NavigationCard from "../components/NavigationCard";
import Layout from "../components/Layout";
import { Modal } from "../components/Modal";
import CreateNewsForm from "../components/CreateNewsForm";
import { useEffect, useState } from "react";
import { Flex, Table, TableContainer, Tbody, Td, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { INews } from "../services/models/news";
import newsService from "../services/news";
import { AxiosResponse } from "axios";
import { toast } from "../components/Toast";
import UpdateNewsForm from "../components/UpdateNewsForm";

const News = () => {
  const [refreshRequest, setRefreshRequest] = useState<boolean>(false);
  const [newsList, setNewsList] = useState<INews[]>([])
  const [selectedNews, setSelectedNews] = useState<INews>();
  const {
    isOpen: isOpenCreateNewsModal,
    onClose: onCloseCreateNewsModal,
    onOpen: onOpenCreateNewsModal,
  } = useDisclosure();

  const {
    isOpen: isOpenUpdateNewsModal,
    onClose: onCloseUpdateNewsModal,
    onOpen: onOpenUpdateNewsModal,
  } = useDisclosure();

  const handleUpdate = (news: INews) => {
    if (news) setSelectedNews(news);
    onOpenUpdateNewsModal();
  };

  const fetchItems = async () => {
    try {
      const { data }: AxiosResponse<INews[]> = await newsService.getNews();
        setNewsList(data);
      } catch (error) {
        setNewsList([]);
        toast.error('Nenhuma notícia encontrado');
      }
  };

  useEffect(() => {
    fetchItems();
  }, [refreshRequest])

  return (
    <Layout direction="column">
      <Flex justifyContent="right">
        <NavigationCard 
          title="Criar"
          description="Criar notícia"
          onClick={() => onOpenCreateNewsModal()}
        />
      </Flex>
      <TableContainer
        borderRadius="15px"
        height="55vh"
        whiteSpace="inherit"
        fontSize="sm"
        overflowY="auto"
        backdropFilter="blur(8px)"
        bg="whiteAlpha.500"
      >
        <Table variant="simple" width="100%">
          <Thead
            fontWeight="semibold"
          >
            <Tr width="100%">
              <Td>ID</Td>
              <Td>Título</Td>
              <Td>Descrição</Td>
              <Td />
            </Tr>
          </Thead>
          <Tbody fontWeight="semibold" maxHeight="200px">
            {newsList.map((news) => (
              <Tr
                key={news.id}
              >
                <Td>{news.id}</Td>
                <Td>{news.titulo}</Td>
                <Td>{news.descricao}</Td>
                <Td
                  onClick={
                    () => handleUpdate(news)
                  }
                  width="5%"
                >
                  <button>
                    <BiEditAlt size={23} />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
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
      <Modal
        title={`Atualizar Notícia`}
        isOpen={isOpenUpdateNewsModal}
        onClose={onCloseUpdateNewsModal}
        size="4xl"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="16px"
        >
          <UpdateNewsForm
            onClose={onCloseUpdateNewsModal}
            refreshRequest={refreshRequest}
            setRefreshRequest={setRefreshRequest}
            selectedNews={selectedNews}
          />
        </Flex>
      </Modal>
    </Layout>
  );
};

export default News;

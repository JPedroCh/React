import Layout from "../components/Layout";
import { Modal } from "../components/Modal";
import CreateNewsForm from "../components/CreateNewsForm";
import { useEffect, useState } from "react";
import { Flex, Table, TableContainer, Tbody, Td, Thead, Tr, useDisclosure, Text, Icon } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { INews } from "../services/models/news";
import newsService from "../services/news";
import { AxiosResponse } from "axios";
import { toast } from "../components/Toast";
import UpdateNewsForm from "../components/UpdateNewsForm";
import { MdDeleteForever } from "react-icons/md";
import DeleteNewsForm from "../components/DeleteNewsForm";
import { IoAdd } from "react-icons/io5";

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

  const {
    isOpen: isOpenDeleteNewsModal,
    onClose: onCloseDeleteNewsModal,
    onOpen: onOpenDeleteNewsModal,
  } = useDisclosure();

  const handleUpdate = (news: INews) => {
    if (news) setSelectedNews(news);
    onOpenUpdateNewsModal();
  };

  const handleDelete = (news: INews) => {
    if (news) setSelectedNews(news);
    onOpenDeleteNewsModal();
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
      <Text fontSize="7xl" textAlign="center" color="white">Notícias</Text>
      <Flex justifyContent="right">
        <Flex
          onClick={() => onOpenCreateNewsModal()}
          bgColor="whiteAlpha.500"
          marginBottom="20px"
          borderRadius="10px"
          cursor="pointer"
          gap="20px"
          alignItems="center"
          padding="10px"
          _hover={{ transform: 'scale(1.02)'}}
        >
          <Text fontSize="xl">Criar Notícia</Text>
          <Icon as={IoAdd} boxSize={10}/>
        </Flex>
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
                <Td
                  onClick={
                    () => handleDelete(news)
                  }
                  width="5%"
                >
                  <button>
                    <MdDeleteForever size={23} />
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
      <Modal
        title={`Remover Notícia`}
        isOpen={isOpenDeleteNewsModal}
        onClose={onCloseDeleteNewsModal}
        size="4xl"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="16px"
        >
          <DeleteNewsForm
            onClose={onCloseDeleteNewsModal}
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

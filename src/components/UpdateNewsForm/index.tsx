import { useForm } from 'react-hook-form';
import { Button, Flex} from '@chakra-ui/react';
import { ChakraInput } from '../ChakraInput';
import { toast } from '../Toast';
import newsService from "../../services/news";
import { theme } from '../../styles/theme';
import { INews } from '@/services/models/news';

export type FormValues = {
  id: string;
  titulo: string;
  descricao: string;
};

interface UpdateNewsFormProps {
  onClose: () => void;
  refreshRequest: boolean;
  setRefreshRequest: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNews: INews | undefined;
}

export default function UpdateNewsForm({
  onClose,
  refreshRequest,
  setRefreshRequest,
  selectedNews,
}: UpdateNewsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: selectedNews,
  });


  const onSubmit = handleSubmit(async (formData) => {
    try {
      const response = await newsService.updateNews(formData);

      if (response.status === 200 || response.status === 201) {
        toast.success('Notícia atualizada com sucesso', 'Sucesso');
        setRefreshRequest(!refreshRequest);
        onClose();
        return;
      }

      toast.error('Erro ao tentar atualizar notícia', 'Erro');
    } catch {
      toast.error('Erro ao tentar atualizar notícia', 'Erro');
    }
  });

  return (
    <form id="update-news-form" onSubmit={onSubmit}>
      <Flex gap="4rem" flexWrap="wrap">
        <ChakraInput
          label="ID"
          errors={errors.id}
          {...register('id', {
            required: 'Campo Obrigatório',
          })}
          disabled
        />
        <ChakraInput
          label="Título"
          errors={errors.titulo}
          {...register('titulo', {
            required: 'Campo Obrigatório',
          })}
        />
        <ChakraInput
          label="Descrição"
          errors={errors.descricao}
          {...register('descricao', {
            required: 'Campo Obrigatório',
          })}
        />
      </Flex>
      <Flex gap="4rem" mt="2rem" mb="1rem" justify="center">
        <Button 
          onClick={onClose}
          bg={`${theme.secondary}`}
          color={'white'}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          form="update-news-form"
          bg={`${theme.background}`}
          color={'white'}
        >
          Atualizar
        </Button>
      </Flex>
    </form>
  );
}

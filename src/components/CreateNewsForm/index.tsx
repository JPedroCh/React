import { useForm } from 'react-hook-form';
import { Button, Flex} from '@chakra-ui/react';
import { ChakraInput } from '../ChakraInput';
import { toast } from '../Toast';
import newsService from "../../services/news";
import { theme } from '../../styles/theme';

export type FormValues = {
  titulo: string;
  descricao: string;
};

interface CreateNewsFormProps {
  onClose: () => void;
  refreshRequest: boolean;
  setRefreshRequest: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateNewsForm({
  onClose,
  refreshRequest,
  setRefreshRequest,
}: CreateNewsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();


  const onSubmit = handleSubmit(async (formData) => {
    try {
      const response = await newsService.createNews(formData);

      if (response.status === 200 || response.status === 201) {
        toast.success('Notícia criada com sucesso', 'Sucesso');
        setRefreshRequest(!refreshRequest);
        onClose();
        return;
      }

      toast.error('Erro ao tentar criar notícia', 'Erro');
    } catch {
      toast.error('Erro ao tentar criar notícia', 'Erro');
    }
  });

  return (
    <form id="create-news-form" onSubmit={onSubmit}>
      <Flex gap="4rem" flexWrap="wrap">
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
          form="create-news-form"
          bg={`${theme.background}`}
          color={'white'}
        >
          Criar
        </Button>
      </Flex>
    </form>
  );
}

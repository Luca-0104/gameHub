import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  
  if (error) return null;
  if (isLoading) return <><Spinner/></>;

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image objectFit={'cover'} boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
              <Button textAlign={'left'} whiteSpace={'normal'} onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link" fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

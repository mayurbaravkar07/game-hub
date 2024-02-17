import useGenres from '../utils/hooks/useGenres'
import { Button, List, ListItem, Spinner } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCropperImageUrl from '../services/image-url';
import { Text } from '@chakra-ui/react';
import { Genre } from '../utils/hooks/useGenres';


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreLIst = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) null;
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <List >
            {data?.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack >
                        <Image boxSize='32px' borderRadius={8} src={getCropperImageUrl(genre.image_background)}></Image>
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link' overflow='unset'>{genre.name} </Button>

                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreLIst
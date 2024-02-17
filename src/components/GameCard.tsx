import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../utils/hooks/useGames'
import PlatfromIconList from './PlatfromIconList'
import CriticScore from './CriticScore'
import getCropperImageUrl from '../services/image-url'
interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card >
            <Image src={getCropperImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatfromIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatfromIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card width='300px'>
            <Skeleton height='200px'></Skeleton>
            <CardBody>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton
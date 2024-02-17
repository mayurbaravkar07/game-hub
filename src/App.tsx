import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import { Show } from "@chakra-ui/react"
import GenreLIst from "./components/GenreLIst"
import { useState } from "react"
import { Genre } from "./utils/hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./utils/hooks/useGames"

export interface GameQuery {
  gameQuery: GameQuery;
  genre: Genre | null;
  platform: Platform | null;

}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);



  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`

  }}
    templateColumns={{
      base: '1fr',
      lg: '200px  1fr',

    }}
  >


    <GridItem area='nav'>
      <NavBar></NavBar>
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside' paddingX={5} >
        <GenreLIst selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>
    </Show>


    <GridItem area='main'>
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}></PlatformSelector>
      <GameGrid selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre}></GameGrid>
    </GridItem>
  </Grid>
}

export default App

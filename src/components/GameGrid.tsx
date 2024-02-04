import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // The customized hook for fetching the games
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) {
    return (
      <Text>{error.message}</Text>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} marginTop={4}>
        {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}

      </SimpleGrid>

      { hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          { isFetchingNextPage ? "Loading..." : "Load More" }
        </Button>
      ) }
    </>
  );
};

export default GameGrid;

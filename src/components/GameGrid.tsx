import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  // The customized hook for fetching the games
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

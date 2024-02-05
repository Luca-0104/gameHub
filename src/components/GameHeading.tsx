import React from 'react'
import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data : genres } = useGenres();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId);

    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as='h1' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading
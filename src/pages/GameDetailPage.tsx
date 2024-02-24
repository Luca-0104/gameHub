import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/expandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  // grab the game slug from the URL param
  const { slug } = useParams();
  
  // ! means we are telling typescript compiler, slug is not null for sure
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (
    <>
        <Heading>{ game.name }</Heading>
        <ExpandableText>{ game.description_raw }</ExpandableText>
        <GameAttributes game={game}/>
    </>
    )

};

export default GameDetailPage;

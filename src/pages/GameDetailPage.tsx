import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
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
        <GameTrailer gameId={game.id}/>
    </>
    )

};

export default GameDetailPage;

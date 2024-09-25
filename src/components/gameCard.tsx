import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Img, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "../Services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card >
      <Img src={GetCroppedImageUrl( game.background_image)} />
       
       <CardBody>
        

        <HStack justifyContent='space-between'marginBottom={3}>
        <PlatformIconList platforms={game.parent_platforms.map(p =>p.platform)} />
        <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top} /> </Heading>
       </CardBody>

    </Card>
  );
};

export default gameCard;

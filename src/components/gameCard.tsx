import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Img, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={GetCroppedImageUrl( game.background_image)} />
       
       <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>

        <HStack justifyContent={'space-between'}>
        <PlatformIconList platforms={game.parent_platforms.map(p =>p.platform)} />
        <CriticScore score={game.metacritic} />
        </HStack>
       </CardBody>

    </Card>
  );
};

export default gameCard;

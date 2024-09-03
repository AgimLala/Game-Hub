import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Img, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Img src={game.background_image} />
       
       <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p =>p.platform)} />
       </CardBody>

    </Card>
  );
};

export default gameCard;

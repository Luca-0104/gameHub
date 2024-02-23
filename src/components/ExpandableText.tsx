import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const expandableText = ({ children }: Props) => {
  if (!children) {
    return null;
  }

  // state hook for expanded status
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children.length <= limit) {
    return <Text>{ children }</Text>;
  }

  const showText = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      { showText }
      <Button marginLeft={1} size={'xs'} color={"orange"} onClick={() => setExpanded(!expanded)}>{ expanded ? "show less" : "show more" }</Button>
    </Text>
  )
}

export default expandableText;
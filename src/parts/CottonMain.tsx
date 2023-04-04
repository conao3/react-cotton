import { Flex, View } from "@adobe/react-spectrum";
import CottonHeader from "./CottonHeader";

export default function CottonMain() {
  return (
    <Flex direction="column" height="100%">
      <CottonHeader />
      <Flex direction="row" height="100%">
        <View backgroundColor="blue-600" width="size-6000" />
        <View backgroundColor="purple-600" width="100%" />
      </Flex>
    </Flex>
  )
}

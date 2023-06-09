import { Flex, View } from "@adobe/react-spectrum";
import CottonHeader from "./CottonHeader";
import CottonSidebar from "./CottonSidebar";
import CottonContent from "./CottonContent";

export default function CottonMain() {
  return (
    <Flex direction="column" height="100%" gap="size-100">
      <CottonHeader />
      <Flex direction="row" height="100%" gap="size-100">
        <View width="size-3000"><CottonSidebar /></View>
        <View flex><CottonContent /></View>
      </Flex>
    </Flex>
  )
}

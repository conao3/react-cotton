import { Button, ButtonGroup, Flex, View } from "@adobe/react-spectrum";

export default function CottonHeader() {
  return (
    <Flex direction="row" gap="size-100">
      <View backgroundColor="celery-700" flex />
      <ButtonGroup>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Discard</Button>
      </ButtonGroup>
    </Flex>
  )
}

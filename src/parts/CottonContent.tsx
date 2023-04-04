import React from "react";
import { TextDropItem, View } from "@adobe/react-spectrum";
import { useDrop } from "react-aria";

export default function CottonContent() {
  let [dropped, setDropped] = React.useState<string>();
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) => item.kind === 'text' && item.types.has('text/plain')) as TextDropItem;
      if (item) {
        let text = await item.getText('text/plain');
        setDropped(text);
      }
    }
  });

  return (
    <View
      height="100%"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="regular"
    >
      <div
        {...dropProps}
        ref={ref}
        className="droparea"
      >
        {dropped || 'Drop here'}
        {isDropTarget ? "DropTarget" : null}
      </div>

      <style jsx={true}>
        {`
          .droparea {
            height: 100%
          }
        `}
      </style>
    </View>
  )
}

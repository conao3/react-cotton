import React from "react";
import { TextDropItem, View } from "@adobe/react-spectrum";
import { useDrop } from "react-aria";

export default function CottonContent() {
  const [dropped, setDropped] = React.useState<string>();
  const ref = React.useRef(null);
  const { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      // Only one item is supported for now
      const item = e.items.find((item) => item.kind === 'text' && item.types.has('cotton-widget')) as TextDropItem;
      if (item) {
        const text = await item.getText('id');
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
        className="droparea"
        ref={ref}
        {...dropProps}
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

import { Item, ListView, View, useDragAndDrop } from "@adobe/react-spectrum";

export default function CottonSidebar() {
  const items = [
    {id: 'label', label: 'Label'},
    {id: 'textbox', label: 'Textbox'},
    {id: 'checkbox', label: 'Checkbox'},
    {id: 'dropdown', label: 'Dropdown'},
    {id: 'attachment', label: 'Attachment'},
    {id: 'datetime', label: 'Datetime'},
    {id: 'spacer', label: 'Spacer'},
    {id: 'divider', label: 'Divider'},
  ];

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) => [...keys].map((key) => ({'text/plain': String(key)})),
  });

  return (
    <View height="100%">
      <ListView
        aria-label="Draggable widget list"
        dragAndDropHooks={dragAndDropHooks}
      >
        {
          items.map(item => (
            <Item key={item.id}>{item.label}</Item>
          ))
        }
      </ListView>
    </View>
  )
}

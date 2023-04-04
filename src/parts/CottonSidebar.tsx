import { Item, ListView, View } from "@adobe/react-spectrum";

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

  return (
    <View height="100%" >
      <ListView>
        {
          items.map(item => (
            <Item key={item.id}>{item.label}</Item>
          ))
        }
      </ListView>
    </View>
  )
}

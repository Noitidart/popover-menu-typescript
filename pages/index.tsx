import PopoverMenu from '@/components/PopoverMenu';

export default function Home() {
  return (
    <main className="min-h-screen p-60 space-x-40">
      <PopoverMenu
        label="Current"
        items={[
          {
            label: 'A',
            groupId: 'default',
            id: 'a',
            onClick: () => console.log('You clicked A')
          },
          {
            label: 'B',
            groupId: 'default',
            id: 'b',
            onClick: () => console.log('You clicked B')
          }
        ]}
      />

      {/* Do not modify this file. Modify @/components/PopoverMenu/index.tsx to
          make the following work.
          
          We want to add a new parent level prop `onItemClick` to `PopoverMenu`.
          This is an optional prop. If provided, it makes `onClick` inside each
          item optional. If `onItemClick` is not provided, then
          `onClick` should be required in each item.

          If an item has `onClick`, clicking it calls it. If an item does not
          have `onClick`, clicking it should call `onItemClick` with the item.
          
          Ensure that Typescript sees the exact type of `item`, when `item` is
          hovered in `onItemClick`. So putting mouse over `item.color` in the
          fallback, Typescript should show that the only possibilities for color
          is "red" or "blue". The `item` should also be "open" and allow any
          props, not just "color", I should be able to add anything I want, like
          "animal".
      */}
      <PopoverMenu
        label="Goal"
        items={[
          {
            label: 'A',
            groupId: 'default',
            id: 'a',
            onClick: () => console.log('You clicked A'),
            color: 'blue' as const
          },
          {
            label: 'B',
            groupId: 'default',
            id: 'b',
            color: 'red' as const
          }
        ]}
        onItemClick={item =>
          console.log('Fallback, you clicked item with color:', item.color)
        }
      />
    </main>
  );
}

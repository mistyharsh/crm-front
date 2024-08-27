import { Canvas } from '@storybook/blocks';

import * as Stories from './Icon.story.js';


export function Gallery() {
  const filtered = Object.values(Stories)
    .filter((Story) => Story !== Stories.default);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {filtered.map((Story, index) => {

        console.log(Story);

        return (
          <Canvas
            key={index}
            withToolbar={false}
            sourceState='shown'
            of={Story}
          />
        );
      })}
    </div>
  );
}

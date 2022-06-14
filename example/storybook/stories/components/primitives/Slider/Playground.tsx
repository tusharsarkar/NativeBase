import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
  return (
    <Box mx="5" height="80%">
      <Slider
        minValue={0}
        maxValue={100}
        step={1}
        defaultValue={50}
        variant="vertical"
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};

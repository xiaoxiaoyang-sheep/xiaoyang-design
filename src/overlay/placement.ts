interface PlacementConfig {
  target: HTMLElement;
  overlay: HTMLElement;
  placement?: keyof typeof placementMap;
  points?: [Point, Point];
}

type Point = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';
export type PointType = [Point, Point];
export type PlacementType =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight';

const placementMap: {
  [K in PlacementType]: [Point, Point];
} = {
  topLeft: ['bl', 'tl'],
  top: ['bc', 'tc'],
  topRight: ['br', 'tr'],
  leftTop: ['tr', 'tl'],
  left: ['cr', 'cl'],
  leftBottom: ['br', 'bl'],
  bottomLeft: ['tl', 'bl'],
  bottom: ['tc', 'bc'],
  bottomRight: ['tr', 'br'],
  rightTop: ['tl', 'tr'],
  right: ['cl', 'cr'],
  rightBottom: ['bl', 'br'],
};

export const getPlacement = ({
  target,
  overlay,
  placement,
  points: opoints = ['tl', 'bl'],
}: PlacementConfig) => {
  const {
    top: ttop,
    width: twidth,
    height: theight,
    left: tleft,
  } = target.getBoundingClientRect();
  const { width: owidth, height: oheight } = overlay.getBoundingClientRect();
  const { top: cTop, left: cLeft } = document.body.getBoundingClientRect();
  const { scrollTop: cScrollTop, scrollLeft: cScrollLeft } = document.body;

  let points = opoints;
  if (placement && placement in placementMap) {
    points = placementMap[placement];
  }

  const baseTop = ttop - cTop + cScrollTop;
  const baseLeft = tleft - cLeft + cScrollLeft;

  let top = baseTop;
  let left = baseLeft;

  switch (points[1][0]) {
    case 't':
      top += 0;
      break;
    case 'c':
      top += theight / 2;
      break;
    case 'b':
      top += theight;
      break;
  }

  switch (points[1][1]) {
    case 'l':
      left += 0;
      break;
    case 'c':
      left += twidth / 2;
      break;
    case 'r':
      left += twidth;
      break;
  }

  switch (points[0][0]) {
    case 't':
      top -= 0;
      break;
    case 'c':
      top -= oheight / 2;
      break;
    case 'b':
      top -= oheight;
      break;
  }

  switch (points[0][1]) {
    case 'l':
      left -= 0;
      break;
    case 'c':
      left -= owidth / 2;
      break;
    case 'r':
      left -= owidth;
      break;
  }

  return {
    position: 'absolute',
    top,
    left,
  };
};

import { css, FlattenSimpleInterpolation } from 'styled-components';

import { FlexVariants } from 'types';

export interface Utils {
  dFlex: (justify?: FlexVariants, align?: FlexVariants) => FlattenSimpleInterpolation;
  lineClamp: (row?: number) => FlattenSimpleInterpolation;
}

const utils: Utils = {
  dFlex: (justify = 'center', align = 'center') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
  lineClamp: (row = 1) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${row};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
};
export default utils;

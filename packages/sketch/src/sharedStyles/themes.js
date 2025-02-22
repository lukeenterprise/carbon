/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { white, g10, g90, g100, formatTokenName } from '@carbon/themes';
import { syncColorStyle } from '../tools/sharedStyles';

/**
 * Sync theme color shared styles to the given document and return the result
 * @param {Document} document
 * @returns {Array<SharedStyle>}
 */
export function syncThemeColorStyles(document) {
  const themes = {
    'White theme': white,
    'Gray 10 theme': g10,
    'Gray 90 theme': g90,
    'Gray 100 theme': g100,
  };

  const sharedStyles = Object.keys(themes).flatMap(theme => {
    return Object.keys(themes[theme]).map(token => {
      const name = `${theme} / ${formatTokenName(token)}`;
      return syncColorStyle(document, name, themes[theme][token]);
    });
  });

  return sharedStyles;
}

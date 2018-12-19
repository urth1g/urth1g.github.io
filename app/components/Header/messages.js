/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  name: {
    id: `${scope}.header.name`,
    defaultMessage: 'Djordje Jevremovic',
  },
  title: {
    id: `${scope}.header.title`,
    defaultMessage: 'Junior Web Developer',
  },
  phone: {
    id: `${scope}.header.number`,
    defaultMessage: 'Phone: +381 64 078 58 73',
  },
  email: {
    id: `${scope}.header.email`,
    defaultMessage: 'E-mail: jevremovicdjordje97@gmail.com',
  },
});

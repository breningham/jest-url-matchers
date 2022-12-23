import { toHaveHostname } from './matchers/toHaveHostname'
import { toHaveQueryString } from './matchers/toHaveQueryString';
import { toHaveQueryStrings } from './matchers/toHaveQueryStrings';


expect.extend({
    toHaveHostname,
    toHaveQueryString,
    toHaveQueryStrings
})



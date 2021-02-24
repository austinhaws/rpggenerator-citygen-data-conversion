const { trim } = require('lodash');

/**
 * a GQL Boolean String to js bool: true/false
 *
 * @param {string|null} booleanString this should be from the GQL Schema as an uppercase value
 * @return bool true/false/null where null means not entered or random
 */
module.exports = booleanString => {
    let result;

    if (booleanString === true) {
        result = true;
    } if (booleanString === false) {
        result = false;
    } else if (booleanString === null || booleanString === undefined) {
        result = null;
    } else {
        result = (
            (
                {
                    TRUE: true,
                    FALSE: false,
                    RANDOM: null,
                }
            )
            [trim(booleanString || '').toUpperCase()]
        );
    }

    return (!result && result !== false) ? null : result;
};

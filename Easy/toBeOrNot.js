/**
 *@param {any} val
 * @return {Object}
 */
 var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            // Allow type coercion by converting both values to the same type for comparison
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expectedVal) {
            // Allow type coercion by converting both values to the same type for comparison
            if (val !== expectedVal) {
                return true ;
            } else {
                throw new Error("Equal");
            }
        }
    };
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
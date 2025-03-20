/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        if(args.legnth>10){
            return;
        }
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
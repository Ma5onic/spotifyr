var Spotifyr = {
    emptyFn: function () {},
    applyIf: function (original, config) {
        for (var prop in config) {
            if (original.hasOwnProperty(prop)) {
                original[prop] = config[prop];
            }
        }
    },
    apply: function (original, config) {
        for (var prop in config) {
            original[prop] = config[prop];
        }
    }
};

export default Spotifyr;
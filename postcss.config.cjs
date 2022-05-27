const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNested = require("postcss-nested");
const postcssExtendRule = require("postcss-extend-rule");
const postcssPresetEnv = require("postcss-preset-env");

const dev = process.env.NODE_ENV === "development";

const config = {
    plugins: [
        postcssImport(),
        autoprefixer(),
        postcssNested(),
        postcssExtendRule(),
        //postcssPresetEnv(), Errors with cssnano
        require("postcss-media-minmax")(),

        !dev &&
            cssnano({
                preset: "default",
            }),
    ],
};

module.exports = config;

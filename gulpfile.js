const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilerStyles(){
    return src('./sass-code/**/*.scss')
    .pipe(sass())
    .pipe(dest('./css-code'))
}

function watchTask(){
    watch(['./sass-code/**/*.scss'],compilerStyles)
}
exports.default = series(compilerStyles,watchTask)
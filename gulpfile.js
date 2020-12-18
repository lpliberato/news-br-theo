const gulp = require('gulp')
const theo = require('theo')

const paths = {
  designTokens: './design-tokens',
  generated: './.generated',
  output: './.www'
}

gulp.task('design-tokens', () =>
  gulp.src('design-tokens/tokens.json')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('scss'))
    .pipe(gulp.dest(paths.generated))
)

gulp.task('default', (done) => { })
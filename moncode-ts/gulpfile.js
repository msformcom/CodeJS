// npm i gulp --save-dev
// npm i gulp-typesqcript --save-dev
// npm i typescript --save-dev
const gulp=require("gulp");
const ts=require("gulp-typescript");
const minify=require("gulp-minify");
const sourcemaps=require("gulp-sourcemaps");

// creation d'un compilateur configuré avec le fichier tsconfig.json
const compilateur=ts.createProject("tsconfig.json");

function compileTs(){
    // Chercher les fichiers ts
    return gulp.src("./src/**/*.ts")
        // conserver les fichiers source
        .pipe(sourcemaps.init())
        // les compiler
        .pipe(compilateur())
        // minification
        .pipe(minify({ext:{min:".js"},noSource: true }))
        // ecrire les commentaire sourcemaps
        .pipe(sourcemaps.write())
                // copier dans dist
        .pipe(gulp.dest("./dist"));
}

function copyStaticFiles(cb){
    // Aller chercher les fichier à traiter
    gulp.src("./src/**/*.{html,js,css}")
        // une opération à faire sur chaque fichier
        .pipe(
            // copier dans dist
            gulp.dest("./dist")
        );
    cb();
}





// Enregistrement d'une tache gulp
gulp.task("cp", copyStaticFiles);
gulp.task("tsc", compileTs);

gulp.task("default",()=>{
    gulp.series("cp","tsc")();
    gulp.watch("./src/**/*.{html,js,css}", copyStaticFiles);
    gulp.watch("./src/**/*.ts", compileTs);
  
})
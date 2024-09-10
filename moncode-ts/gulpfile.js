// npm i gulp --save-dev
// npm i gulp-typesqcript --save-dev
// npm i typescript --save-dev
const gulp=require("gulp");
const ts=require("gulp-typescript");

// creation d'un compilateur configuré avec le fichier tsconfig.json
const compilateur=ts.createProject("tsconfig.json");

function compileTs(){
    // Chercher les fichiers ts
    return gulp.src("./src/**/*.ts")
        // les compiler
        .pipe(compilateur())
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

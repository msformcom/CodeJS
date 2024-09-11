// npm i gulp --save-dev
// npm i gulp-typesqcript --save-dev
// npm i typescript --save-dev
const gulp=require("gulp");
const ts=require("gulp-typescript");
const minify=require("gulp-minify");
const sourcemaps=require("gulp-sourcemaps");
const ext_replace = require('gulp-ext-replace');
const replace=require("gulp-replace");

// creation d'un compilateur configuré avec le fichier tsconfig.json
const compilateur=ts.createProject("tsconfig.json");



// Génération des fichiers env ?
function compileTsDev(){
    // Chercher les fichiers ts
    return gulp.src("./src/**/*.ts")

        // conserver les fichiers source
        .pipe(sourcemaps.init())
        // les compiler
        .pipe(compilateur())
        .pipe(replace(/^(import[^\S\r\n].+?[^\S\r\n]from[^\S\r\n]*(["']))((?:(?!(?:\.js)?\2)[\S\s])+)(\2\s*;)/mg,"$1$3.mjs$4"))
        // ecrire les commentaire sourcemaps
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.mjs'))
                // copier dans dist
        .pipe(gulp.dest("./dev"));
}

function compileTsProd(){
    // Chercher les fichiers ts sauf spec.ts
    return gulp.src(["./src/**/*.ts","!./src/**/*.spec.ts"])
        // conserver les fichiers source
        // .pipe(sourcemaps.init())
        // les compiler
        .pipe(compilateur())
        .pipe(replace(/^(import[^\S\r\n].+?[^\S\r\n]from[^\S\r\n]*(["']))((?:(?!(?:\.js)?\2)[\S\s])+)(\2\s*;)/mg,"$1$3.mjs$4"))
        // minification
       .pipe(minify({ext:{min:".mjs"} }))
        // ecrire les commentaire sourcemaps
        //.pipe(sourcemaps.write())
                // copier dans dist
        .pipe(gulp.dest("./dist"));
}

// copyStaticFiles avec parametre relatif au dossier
function copyStaticFiles(directory){
    // Aller chercher les fichier à traiter
    return gulp.src("./src/**/*.{html,js,css}")
        // une opération à faire sur chaque fichier
        .pipe(
            // copier dans dist
            gulp.dest("./"+directory)
        );
}





// Enregistrement d'une tache gulp
gulp.task("cpdev", ()=>copyStaticFiles("dev"));
gulp.task("cpprod", ()=>copyStaticFiles("dist"));
gulp.task("tscdev", compileTsDev);
gulp.task("tscprod", compileTsProd);

gulp.task("dev",()=>{
    gulp.series("cpdev","tscdev")();
    gulp.watch("./src/**/*.{html,js,css}", ()=>copyStaticFiles("dev"));
    gulp.watch("./src/**/*.ts", compileTsDev);
})

gulp.task("prod",(cb)=>{
     gulp.series("cpprod","tscprod")();
    // gulp.watch("./src/**/*.{html,js,css}", copyStaticFiles("prod"));
    // gulp.watch("./src/**/*.ts", compileTsProd);
    cb();
});
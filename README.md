![Cyborg](https://drive.google.com/uc?export=view&id=1a13C8iLtDRUqt20RDkDxQZVf1pfzg6bq)

A static website made with Angular, Typescript based frontend technology, along with extensive use of HTML5, SCSS and Javascript.

## Deploying to gh-pages
    $ ng build --prod
    $ ng deploy --base-href=/cyborg_website/
But for IIIT Delhi servers - ```$ ng deploy ```
    
Or manually remove base `href` from `404.html and index.html` in `dist` folder

## Websites
- [Github-Pages](https://cyborg-iiitd.github.io/cyborg_website/)
- [IIIT Delhi](https://cyborg.iiitd.edu.in/)
### Reference
    https://www.npmjs.com/package/angular-cli-ghpages
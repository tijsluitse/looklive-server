#HTTP Requests
- Concatenate (bundle JS and CSS)
- Uglify (minify JS)
- Minify CSS

##Sprite SVG - Gulp 
- Dom: 344ms
- Frame: 407ms
- Loadevent: 1.10s

##Minimize images
- Dom: 291ms
- Frame: 343ms
- Loadevent: 1.52s

##Minified CSS & JS 
- 277ms
- 317ms
- 1.43s

#Optimaliseer content images

#Webfonts

First all the Raleway font types were loaded in. But we only use the regular (400) and the bold (600) font-weight. In the Looklive project all language is English, therefore I replaced the link to a subset of Raleway.

```<link href='https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900,500,300,200,100' rel='stylesheet' type='text/css'>```

```<link href='https://fonts.googleapis.com/css?family=Raleway&subset=english:400,600' rel='stylesheet' type='text/css'>```


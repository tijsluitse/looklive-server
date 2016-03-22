#Gulp or Grunt?

![https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.ka8tq76hy](readme-images/gvsg.jpg)

There are two main differences between Grunt and Gulp
- Grunt focuses on configuration, while Gulp focuses on code
- Grunt was built around a set of built-in, and commonly used tasks, while Gulp came around with the idea of enforcing nothing, but how community-developed micro-tasks should connect to each other

Compared to in-memory operations, disk writes are slow which means that Gulp has a big speed advantage (for now). A speed comparison was done by tech.tmw which shows that most tasks are at least twice as fast on Gulp. While this wasn’t a hugely scientific study the tendency is there and I’ve seen the same with my own projects. But how big of an impact is the difference in speed?

The argument goes like this: Gulp is a good example that code over configuration can be a good thing when configuration gets a bit confusing. Other people say that while this is true and Gulp is easier to read, it is more difficult to write because piping can be a bit confusing.

I have chosen to use Gulp, not only because I am a beginner and want to use a "simple" taskmanager, but also because the support I can get at my classmates. 

Source: [Hongkiat](http://www.hongkiat.com/blog/gulp-vs-grunt/)

#HTTP Requests
The amount of http request at the start of this final exercise was: 
Now there are 165 http requests. 

To reduce this amount I have created a sprite SVG for all icons, I have minified the CSS and JS files and optimized all images. Besides that I have created a fontface observer to check if the font is loaded.

##Sprite SVG - Gulp 
- Dom: 344ms
- Frame: 407ms
- Loadevent: 1.10s

##Minified CSS & JS 
- 277ms
- 317ms
- 1.43s

#Optimaliseer content images

##Compress images
- Dom: 291ms
- Frame: 343ms
- Loadevent: 1.52s

#Webfonts

First all the Raleway font types were loaded in. But we only use the regular (400) and the bold (600) font-weight. In the Looklive project all language is English, therefore I replaced the link to a subset of Raleway.

```<link href='https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900,500,300,200,100' rel='stylesheet' type='text/css'>```

```<link href='https://fonts.googleapis.com/css?family=Raleway&subset=greek' rel='stylesheet' type='text/css'>```


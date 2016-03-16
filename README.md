##Exercise - Improving the loading of the Looklive server

###First state of application
- DOMContentLoaded: 1.53s
- First paint: 1.62s
- Load event: 15.01s

![First Load Ever](http://tijsluitse.com/images/first-load-ever.png)

##Optimized the HTML & CSS 

###Before
- DOMContentLoaded: 1.53s
- First paint: 1.62s
- Load event: 15.01s

###After 
- DOMContentLoaded: 1.57s
- First paint: 1.66s
- Load event: 15.03s

![First Load Ever](http://tijsluitse.com/images/html-css-optimized.png)

##Icons from .png to .svg 

###Before 
- DOMContentLoaded: 1.57s
- First paint: 1.66s
- Load event: 15.03s

###After 
- DOMContentLoaded: 1.70s
- First paint: 1.75s
- Load event: 15.4s

![First Load Ever](http://tijsluitse.com/images/png-to-svg.png)

##Used Vanilla JS instead of JQuery

###Before 
- DOMContentLoaded: 1.70s
- First paint: 1.75s
- Load event: 15.4s

###After 
- DOMContentLoaded: 953ms
- First paint: 165ms
- Load event: 14.4s

![First Load Ever](http://tijsluitse.com/images/vanilla-js.png)

##Changed header image (from .png to web optimized .jpg)

###Before 
- DOMContentLoaded: 953ms
- First paint: 165ms
- Load event: 14.4s

###After 
- DOMContentLoaded: 899ms
- First paint: 158ms
- Load event: 10.48s

![First Load Ever](http://tijsluitse.com/images/header-image.png)

##Build one page application

###Before 
- DOMContentLoaded: 899ms
- First paint: 158ms
- Load event: 10.48s

###After 
- DOMContentLoaded: 1.03s
- First paint: 167ms
- Load event: 10.18s

![First Load Ever](http://tijsluitse.com/images/single-page.png)

##Conclusion

After doing all the adjustments can be seen that the application has definitely become faster. But because the testing has been done in an environment having a non-constant internet connection, the results are different each time I refresh the page. Finally I can say that in the DOMContentLoaded, the first paint and the load event won some time. And time is very precious. 

###First time
- DOMContentLoaded: 1.53s
- First paint: 1.62s
- Load event: 15.01s

###After improvements
- DOMContentLoaded: 1.03s
- First paint: 167ms
- Load event: 10.18s












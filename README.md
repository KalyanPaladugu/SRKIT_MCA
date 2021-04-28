# Responsive Web Design:
========================

+ Media Queires
+ syntax : `@media screen and (max-width:600px){
      // statements
}`
+ For extra-small devices - max-width:600px
+ For small devices - min-width:600px
+ For medium devices - min-width:768px and above
+ For large devices - min-width : 992px and above
+ For extra-large  - min-width:1024px and above


# Bootstrap:
============
+ CSS framework
+ color codes
      + primary - blue
      + secondary -gray
      + info  -sky blue
      + success - green
      + warning - yellow
      + danger  -red
      + light - light gray
      + white  -white


Examples:
========
  + btn btn-primary
  + bg bg-secondry
  + text-info


+ mt-*    (* states level 0-5)
+ pb-3
      + 0 - 0rem (1 rem-16px)
      + 1 - 0.25rem
      + 2 - 0.5rem
      + 3 - 1 rem
      + 4 - 1.5rem
      + 5 - 3rem

Grid systems:
=============
+ col-xs- * (* : 0-12)  - extra small devices
+ col-sm-*              - small devices
+ col-md-*              - medium devices
+ col-lg-*              - large device


ES(ECMA SCRIPT)-6:
==================
+ let & const
+ Arrow functions
+ Destructuring of arrays & objects (need)
+ Spread operator and Rest parameter

Difference between var, let &const:
===================================
 +  property                           var         let     const
 +   scope                             function    block   block
 +   Redefine                          yes         yes      no
 +   Redeclare                          yes        no       no


JSON(JavaScript Object Notation):
===============================

+ It is easy way to write and represent data in the form key and value pair
+ By using JSON we can store huge amount of data
+ To exchange information between application and server



AJAX(Asynchronous JavaScript and XML) call:
===========================================

+ update the data without page reload
+ Request data to the server
+ Receive data from the server
+ To create dynamic web applications we will use AJax call



ReactJS:
========

## Features of ReactJS:

+ It is a library
+ It uses Virtual DOM
+ single page applications
+ components
      + Function Components(state less)
      + Class Components(state)
      + Higher Order Components (HOC)
      + Pure Components
+ Unidirectional flow

## Environment setup:

 Install node & npm

+ webpack and babel

+ create-react-app
            + npm install create-react-app
            + create-react-app applicationname

            + npx create-react-app myapp
# Interactive Resume

An interactive resume application developed using jQuery that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Built as part of Front-End Web Developer Nanodegree at Udacity.

### Technologies
  * HTML
  * CSS
  * JavaScript
  * jQuery


### Data Schema

  * `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string
                 url: string
            display: function taking no parameters

  * `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string
                  description: string
                  images: array with string urls
            display: function taking no parameters


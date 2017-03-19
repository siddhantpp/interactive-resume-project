var DATA_PLACEHOLDER = '%data%',
    bio = {
        name: 'Siddhant Pardeshi',
        role: 'Full Stack Web Developer',
        contacts: {
            mobile: '+919623450193',
            email: 'siddhantpp@gmail.com',
            github: 'https://github.com/siddhantpp',
            twitter: '@siddhantpp',
            location: 'Pune, MH, IN'
        },
        welcomeMessage: 'Passionate Computer Scientist',
        skills: [
            'Creativity, Curiosity, Communication',
            'HTML, CSS',
            'JavaScript',
            'AngularJS',
            'Java',
            'C, C++',
            'Python'
        ],
        biopic: 'https://i.imgur.com/jRIUF1E.jpg',
        display: function displayBio() {
            addHeader(bio.name, bio.role);
            addTopContacts(bio.contacts);
            addBasicInfo(bio.biopic, bio.welcomeMessage);
            addSkills(bio.skills);
        }
    },
    work = {
        jobs: [{
            employer: 'NVIDIA Corporation',
            title: 'Systems Software Engineer',
            location: 'Pune, MH, IN',
            dates: 'July, 2016 - Present',
            description: 'Developed new features for NVIDIA GeForce Experience'
        }, {
            employer: 'NVIDIA Corporation',
            title: 'Intern',
            location: 'Pune, MH, IN',
            dates: 'January, 2016 - July, 2016',
            description: 'Helped design, develop and release the new NVIDIA GeForce Experience'
        }],
        display: function displayWork() {
            work.jobs.forEach(function iterator(item, index) {
                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last')
                    .append(HTMLworkEmployer.replace(DATA_PLACEHOLDER, item.employer) +
                    HTMLworkTitle.replace(DATA_PLACEHOLDER, item.title));
                $('.work-entry:last').append(HTMLworkDates.replace(DATA_PLACEHOLDER, item.dates));
                $('.work-entry:last').append(HTMLworkLocation.replace(DATA_PLACEHOLDER, item.location));
                $('.work-entry:last')
                    .append(HTMLworkDescription.replace(DATA_PLACEHOLDER, item.description));
            });
        }
    },
    projects = {
        projects: [{
            title: 'Mess Management Software using Java, Swing and MySQL',
            dates: 'October, 2014 - November, 2014',
            description: 'Designed a GUI-based program that could efficiently manage' +
                ' routine operations at our local mess.',
            images: ['https://i.imgur.com/om4ZTjU.png'],
        }],
        display: function displayProjects() {
            projects.projects.forEach(function iterator(item, index) {
                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last')
                    .append(HTMLprojectTitle.replace(DATA_PLACEHOLDER, item.title));
                $('.project-entry:last')
                    .append(HTMLprojectDates.replace(DATA_PLACEHOLDER, item.dates));
                $('.project-entry:last')
                    .append(HTMLprojectDescription.replace(DATA_PLACEHOLDER, item.description));
                item.images.forEach(function iterator(imageItem, index) {
                    $('.project-entry:last')
                        .append(HTMLprojectImage.replace(DATA_PLACEHOLDER, imageItem));
                });
            });
        }
    },
    education = {
        schools: [{
            name: 'Birla Institute of Technology and Science, Pilani',
            location: 'Zuarinagar, GOA, IN',
            degree: 'Bachelor of Engineering',
            majors: ['Electrical and Electronics Engineering'],
            dates: 'August, 2012 - June, 2016',
            url: 'http://www.bits-pilani.ac.in/Goa/'
        }],
        onlineCourses: [{
            title: 'Learn and Understand AngularJS',
            school: 'Udemy',
            dates: '2016',
            url: 'https://www.udemy.com/certificate/UC-S9V5FAO0/'
        }],
        display: function displayEducation() {
            addSchools(education.schools);
            addOnlineCourses(education.onlineCourses);
        }
    };

function inName(name) {
    /* Tied to internationalize button in main */

    var names = name.split(" "),
        firstNameChar = names[0].slice(0, 1).toUpperCase();

    names[0] = firstNameChar + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();

    return names.join(" ");
}

function addHeader(name, role) {
    /* Formats and Adds name and role to the header section inside the template */

    //declare formatted variables
    var formattedName = HTMLheaderName.replace(DATA_PLACEHOLDER, name),
        formattedRole = HTMLheaderRole.replace(DATA_PLACEHOLDER, role),
        formattedHeader = [formattedRole, formattedName];

    formattedHeader.forEach(function iterator(item, index) {
        //prepend for correct order of appearance
        $('#header').prepend(item);
    });
}

function addBasicInfo(pic, msg) {
    /* Formats and Adds pic, msg, internationalize button and google map to the template */

    var formattedPic = HTMLbioPic.replace(DATA_PLACEHOLDER, pic),
        formattedMsg = HTMLwelcomeMsg.replace(DATA_PLACEHOLDER, msg),
        skillsContainer = HTMLskillsStart,
        formattedBasicInfo = [formattedPic, formattedMsg, skillsContainer];

    formattedBasicInfo.forEach(function iterator(item, index) {
        //prepend for correct order of appearance
        $('#header').append(item);
    });

    //Add an internationalize button
    $('#main').append(internationalizeButton);

    //Add the google map
    $('#mapDiv').append(googleMap);
}

function addTopContacts(contacts) {
    /* Formats and Adds contact information inside the template */

    var formattedMobile = HTMLmobile.replace(DATA_PLACEHOLDER, contacts.mobile),
        formattedEmail = HTMLemail.replace(DATA_PLACEHOLDER, contacts.email),
        formattedGithub = HTMLgithub.replace(DATA_PLACEHOLDER, contacts.github),
        formattedTwitter = HTMLtwitter.replace(DATA_PLACEHOLDER, contacts.twitter),
        formattedLocation = HTMLlocation.replace(DATA_PLACEHOLDER, contacts.location),
        formattedContactInformation = [
            formattedMobile,
            formattedEmail,
            formattedGithub,
            formattedTwitter,
            formattedLocation
        ];

    formattedContactInformation.forEach(function iterator(item, index) {
        $('#topContacts').append(item);
        $('#footerContacts').append(item);
    });
}

function addSkills(skills) {
    skills.forEach(function iterator(item, index) {
        //prepend for correct order of appearance
        $('#skills').append(HTMLskills.replace(DATA_PLACEHOLDER, item));
    });
}

function addSchools(schools) {
    schools.forEach(function iterator(item, index) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last')
            .append(HTMLschoolName.replace(DATA_PLACEHOLDER, item.name) +
            HTMLschoolDegree.replace(DATA_PLACEHOLDER, item.degree));
        $('.education-entry:last')
            .append(HTMLschoolDates.replace(DATA_PLACEHOLDER, item.dates));
        $('.education-entry:last')
            .append(HTMLschoolLocation.replace(DATA_PLACEHOLDER, item.location));
        item.majors.forEach(function iterator(majorItem, index) {
            $('.education-entry:last')
                .append(HTMLschoolMajor.replace(DATA_PLACEHOLDER, majorItem));
        });
    });
}

function addOnlineCourses(courses) {
    $('#education').append(HTMLonlineClasses);
    courses.forEach(function iterator(item, index) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last')
            .append(HTMLonlineTitle.replace(DATA_PLACEHOLDER, item.title) +
            HTMLonlineSchool.replace(DATA_PLACEHOLDER, item.school));
        $('.education-entry:last')
            .append(HTMLonlineDates.replace(DATA_PLACEHOLDER, item.dates));
        $('.education-entry:last')
            .append(HTMLonlineURL.replace(DATA_PLACEHOLDER, item.url));
    });
}

bio.display();
work.display();
education.display();
projects.display();

// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {

            // navabar
            navbarVisible: false,

            // scroll-down
            scrollDownVisible: false,

            // title
            titleIndex: 0,
            titleText: "Hi, I'm Mattia and I'm a web developer",

            // project
            projects: [
                {
                    title: "WHATSAPP",
                    description: "A WhatsApp web app clone, using HTML, CSS and Vue JS",
                    descrVisible: false,
                    class: "whatsapp",
                    grayscale: false,
                },
                {
                    title: "NETFLIX",
                    description: "A Netflix clone, calling the TMDB Api and using HTML, CSS and Vue JS",
                    descrVisible: false,
                    class: "netflix",
                    grayscale: false,
                },
                {
                    title: "TODO LIST",
                    description: "A simple todo list, using HTML, CSS and Vue JS",
                    descrVisible: false,
                    class: "todo",
                    grayscale: false,
                },
                {
                    title: "BURGER",
                    description: "A simple web app, using HTML, CSS and JavaScript",
                    descrVisible: false,
                    class: "burger",
                    grayscale: false,
                },
                {
                    title: "SLIDER",
                    description: "A simple images slideshow, using HTML, CSS and Vue JS",
                    descrVisible: false,
                    class: "slider",
                    grayscale: false,
                },
            ],

            // skills
            frontEndTitle: "Front-end",
            frontEndTitleWhite: false,
            backEndTitle: "Back-end",
            backEndTitleWhite: false,
            learningTitle: "I'm learning",
            learningTitleWhite: false,

            // frontend skill list
            frontEndSkills: [
                {
                    title: "HTML 5",
                    path: "html.png"
                },
                {
                    title: "CSS 3",
                    path: "css.png"
                },
                {
                    title: "Bootstrap",
                    path: "bootstrap.png"
                },
                {
                    title: "Sass",
                    path: "sass.png"
                },
                {
                    title: "JavaScript ES6",
                    path: "javascript.png"
                },
                {
                    title: "JQuery",
                    path: "jquery.png"
                },
                {
                    title: "Vue JS",
                    path: "vuejs.png"
                },
                {
                    title: "Photoshop",
                    path: "photoshop.png"
                },
            ],

            // backend skill list
            backEndSkills: [
                {
                    title: "PHP",
                    path: "php.png"
                },
                {
                    title: "Laravel",
                    path: "laravel.png"
                },
                {
                    title: "My SQL",
                    path: "mysql.png"
                },
            ],

            // learning skill list
            learningSkills: [
                {
                    title: "React JS",
                    path: "react.png"
                },
                {
                    title: "Angular JS",
                    path: "angular.png"
                },
                {
                    title: "Illustrator",
                    path: "illustrator.png"
                },
            ],
 
            // contacts modal
            activeModalIndex: 0,
            emailText: "Email address: pmattiab@live.it",
            email: "pmattiab@live.it",
        },

        // funzioni
        methods: {

            frontMouseOver(index) {
                this.frontEndTitle = this.frontEndSkills[index].title;
                this.frontEndTitleWhite = true;
            },

            backMouseOver(index) {
                this.backEndTitle = this.backEndSkills[index].title;
                this.backEndTitleWhite = true;
            },

            learningMouseOver(index) {
                this.learningTitle = this.learningSkills[index].title;
                this.learningTitleWhite = true;
            },

            mouseLeave() {
                this.frontEndTitle = "Front-end";
                this.backEndTitle = "Back-end";
                this.learningTitle = "I'm learning";
                this.frontEndTitleWhite = false;
                this.backEndTitleWhite = false;
                this.learningTitleWhite = false;
            },

            showNavbar() {
                this.navbarVisible = true;
            },

            showScrollDown() {
                this.scrollDownVisible = true;
            },

            showModal(index){
                this.activeModalIndex = index;
                this.emailText = "Email address: pmattiab@live.it";
            },

            copyEmail() {
                navigator.clipboard.writeText(this.email);
                this.emailText = "Copied to clipboard!";
            },

            projectShow(index){
                this.projects.forEach(element => {
                    element.grayscale = true;
                    element.descrVisible = false;
                });
                this.projects[index].grayscale = false;
                this.projects[index].descrVisible = true;
            }
        },

        // funzioni in mounted che partono dopo il caricamento dell'HTML
        created() {
            setTimeout(this.showNavbar, 4000);
            setTimeout(this.showScrollDown, 5000);
        },

        // funzioni in mounted che partono dopo il caricamento dell'HTML
        mounted() {}
    }
);

let index = 0;
let text = "Hi, I'm Mattia and I'm a web developer";

function typing() {

    if (index < text.length) {
    
        document.getElementById("title").innerHTML += text.charAt(index);
    
        index++;
    
        setTimeout(typing, 90);
    }
}

typing();

// window.addEventListener("scroll", reveal);

// function reveal() {

//     var reveals = document.querySelectorAll(".reveal");

//     for (var i = 0; i < reveals.length; i++) {

//         var windowHeight = window.innerHeight;

//         var revealTop = reveals[i].getBoundingClientRect().top;

//         var revealPoint = 100;

//         if (revealTop < windowHeight - revealPoint) {

//             reveals[i].classList.add("show");
            
//         } else {

//             reveals[i].classList.remove("show");
//         }
//     }
// }
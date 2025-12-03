const creators = {
    guido: {
        name: "Guido van Rossum",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Guido_van_Rossum_OSCON_2006.jpg",
        summary: "Guido van Rossum is a Dutch programmer best known as the creator of Python, a high-level programming language known for its simplicity and readability. Born in 1956, he designed Python as a side project while working at CWI in Amsterdam in 1989. Python has become one of the most popular programming languages, widely used in web development, data science, and artificial intelligence."
    },
    bjarne: {
        name: "Bjarne Stroustrup",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bjarne_Stroustrup.jpg",
        summary: "Bjarne Stroustrup is a Danish programmer who created C++, one of the most influential programming languages. He developed C++ in 1983 as an extension of the C language, combining object-oriented features with high performance. His work revolutionized systems programming and enabled the creation of numerous high-performance applications used worldwide."
    },
    dennis: {
        name: "Dennis Ritchie",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg",
        summary: "Dennis Ritchie was an American computer scientist who created the C programming language in 1972. Working at Bell Labs, he designed C as a simple, efficient, and portable language that became the foundation for modern operating systems and countless applications. He won the Turing Award in 1983 for his contributions to programming language design."
    },
    james: {
        name: "James Gosling",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/James_Gosling_2008.jpg",
        summary: "James Gosling is a Canadian programmer recognized as the father of Java. He created Java at Sun Microsystems in 1995 with the goal of making a platform-independent language. Java's 'write once, run anywhere' philosophy revolutionized software development and remains one of the most widely used programming languages in enterprise environments."
    },
    brendan: {
        name: "Brendan Eich",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich.jpg",
        summary: "Brendan Eich is an American programmer who created JavaScript in 1995 while working at Netscape Communications. Originally developed for web browsers, JavaScript has evolved into a versatile language used for both client-side and server-side development. His creation became the de facto standard for web development and powers billions of web applications."
    },
    graydon: {
        name: "Graydon Hoare",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Graydon_Hoare.jpg",
        summary: "Graydon Hoare is a Canadian programmer who created Rust while working at Mozilla. He designed Rust starting in 2006 to address memory safety and concurrency challenges in systems programming. Rust has gained significant adoption for building reliable and efficient software, winning the Stack Overflow Developer Survey's 'most loved programming language' award multiple years in a row."
    },
    larry: {
        name: "Larry Wall",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Larry_Wall_YAPC_2008_crop.jpg",
        summary: "Larry Wall is an American programmer and author best known for creating Perl, a highly capable programming language released in 1987. Perl was designed to combine the strengths of several languages and has become popular for system administration, web development, and text processing. Larry is known for his pragmatic approach to programming and the motto 'There's more than one way to do it'."
    },
    tim: {
        name: "Tim Peters",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Tim_Peters.jpg",
        summary: "Tim Peters is an influential American software developer who made significant contributions to the Python programming language throughout the 1990s and 2000s. Known as the author of the Timsort algorithm used in Python and Java, he is also famous for 'The Zen of Python,' a collection of 20 principles for writing beautiful code. His work has profoundly influenced Python's design philosophy and culture."
    },
    robert: {
        name: "Robert Griesemer",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Robert_Griesemer.jpg",
        summary: "Robert Griesemer is a Swiss computer scientist and software engineer who co-created Go (Golang) at Google in 2007. Working alongside Ken Thompson and Rob Pike, he designed Go to simplify concurrent programming and improve development efficiency. His contributions to Go's syntax and semantics have made it a preferred language for cloud computing and microservices architecture."
    },
    niklaus: {
        name: "Niklaus Wirth",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Niklaus_Wirth_%282006%29.jpg",
        summary: "Niklaus Wirth is a Swiss computer scientist best known for creating the Pascal programming language in 1970. Designed as a teaching language emphasizing structured programming, Pascal became widely used in education and industry. Wirth is also known for the principle 'Software engineering = Algorithms + Data Structures,' which remains fundamental to computer science education."
    },
    grace: {
        name: "Grace Hopper",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/GraceHopper.jpg",
        summary: "Grace Hopper was a pioneering American computer scientist and U.S. Navy rear admiral who was instrumental in developing COBOL (Common Business-Oriented Language) in 1959. She invented the first compiler and championed the concept of machine-independent programming languages. Her vision and technical prowess laid the groundwork for modern software development."
    },
    rasmus: {
        name: "Rasmus Lerdorf",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Rasmus_Lerdorf_at_FluentConf_2015.jpg",
        summary: "Rasmus Lerdorf is a Danish-Canadian programmer who created PHP (Hypertext Preprocessor) in 1995 as a simple scripting language for web development. Initially developed for his personal website, PHP evolved into one of the most widely used server-side scripting languages, powering millions of websites worldwide. His pragmatic approach to language design made web development accessible to many."
    },
    david: {
        name: "David Heinemeier Hansson",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/66/David_Heinemeier_Hansson_cropped.jpg",
        summary: "David Heinemeier Hansson, known as DHH, is a Danish programmer famous for creating Ruby on Rails, a revolutionary web application framework released in 2004. He championed the 'Convention over Configuration' philosophy, which dramatically reduced development time and complexity. Rails became instrumental in the rise of Ruby as a language and influenced numerous other frameworks."
    },
    matz: {
        name: "Yukihiro Matsumoto",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Yukihiro_Matsumoto_-_Japan%2C_2015.jpg",
        summary: "Yukihiro Matsumoto, also known as Matz, is a Japanese programmer who created the Ruby programming language in 1995. Designed with programmer happiness and productivity in mind, Ruby emphasizes readability and elegant syntax. His philosophy of making programming more enjoyable has attracted a passionate community and influenced the design of many modern programming languages."
    },
    ken: {
        name: "Ken Thompson",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Ken_Thompson_%281960s%29.jpg",
        summary: "Ken Thompson is an American computer scientist and pioneer who co-created Go with Robert Griesemer and Rob Pike at Google. He also co-created Unix and designed the B programming language. Thompson's work in systems programming and his contributions to Go have shaped modern software infrastructure and concurrent programming practices."
    }
};

const creatorSelect = document.getElementById('creatorSelect');
const creatorCard = document.getElementById('creatorCard');
const creatorImage = document.getElementById('creatorImage');
const creatorName = document.getElementById('creatorName');
const creatorSummary = document.getElementById('creatorSummary');

creatorSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    if (!selectedValue) {
        creatorCard.style.display = 'none';
        return;
    }

    const creator = creators[selectedValue];
    creatorImage.src = creator.image;
    creatorImage.alt = creator.name;
    creatorName.textContent = creator.name;
    creatorSummary.textContent = creator.summary;
    creatorCard.style.display = 'flex';
});

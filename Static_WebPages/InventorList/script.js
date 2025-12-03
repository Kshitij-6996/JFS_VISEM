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

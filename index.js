const users = [
    {
        name: "Alice Johnson",
        age: 28,
        bio: "Passionate software engineer with a love for open-source projects and continuous learning.",
        imageUrl: "https://placehold.co/150x150/FF6347/FFFFFF?text=Alice" // Placeholder image
    },
    {
        name: "Bob Williams",
        age: 34,
        bio: "Experienced data scientist focused on machine learning applications in healthcare.",
        imageUrl: "https://placehold.co/150x150/4682B4/FFFFFF?text=Bob" // Placeholder image
    },
    {
        name: "Charlie Brown",
        age: 22,
        bio: "Creative UX/UI designer who enjoys crafting intuitive and beautiful user experiences.",
        imageUrl: "https://placehold.co/150x150/32CD32/FFFFFF?text=Charlie" // Placeholder image
    },
    {
        name: "Diana Miller",
        age: 30,
        bio: "Marketing specialist with a knack for digital strategy and content creation.",
        imageUrl: "https://placehold.co/150x150/FFD700/000000?text=Diana" // Placeholder image
    },
    {
        name: "Ethan Davis",
        age: 25,
        bio: "Aspiring cybersecurity analyst, always keen on exploring new security vulnerabilities.",
        imageUrl: "https://placehold.co/150x150/8A2BE2/FFFFFF?text=Ethan" // Placeholder image
    }
];

function cards(users){
 users.forEach(function(user){
    const card=document.createElement('div');
    card.classList.add('card');

    const img=document.createElement('img')
    img.classList.add('img')
    img.src=user.imageUrl;
const content =document.createElement('div')
content.classList.add('content')
    const age=document.createElement('h3')
    age.textContent=user.name

    const para=document.createElement('p');
    para.textContent=user.bio;

content.appendChild(age)
content.appendChild(para)
card.appendChild(img);
card.appendChild(content);

document.querySelector('.carddiv').appendChild(card)
 })
}
cards(users);
let inp=document.querySelector('input');
inp.addEventListener('change',()=>{
    let nu=users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });
    document.querySelector('.carddiv').innerHTML=''
    cards(nu)
});


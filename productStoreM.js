var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];




let node = document.createElement("div");
node.classList.add('popUp')
node.addEventListener('click',function(){
    this.style.display = 'none';
})
document.body.appendChild(node);



for(let x=0;x< products.length;x++) {
    let node = document.createElement('div');
    let img = document.createElement('img');
    img.src = products[x].image;


    node.appendChild(img);
    let name = document.createElement('div');
    name.innerHTML='Name: ' + products[x].name;
    let price = document.createElement('div');
    price.innerHTML='Name: ' + products[x].price;
    node.appendChild(name);
    node.appendChild(price);
    document.body.appendChild(node)

    node.classList.add("product");

    node.addEventListener("mouseover", function(){
        this.style.border="1px solid "+ products[x].color;
    });
    node.addEventListener("mouseout", function(){
        this.style.border="1px solid black";
    });
    node.addEventListener("click", function(){
        let div = document.getElementsByClassName('popUp')[0];
        div.style.display='block';
        let img = document.createElement('img');
        img.src = products[x].image;


        while (div.firstChild)
            div.removeChild(div.firstChild);

        div.appendChild(img);
        let name = document.createElement('div');
        name.innerHTML='Name: ' + products[x].name;
        let price = document.createElement('div');
        price.innerHTML='Price: ' + products[x].price;


        div.appendChild(name);
        div.appendChild(price);
    });
}






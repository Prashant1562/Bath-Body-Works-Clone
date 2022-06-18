let myCart = JSON.parse(localStorage.getItem("myCart")) || [];
    let quantity = JSON.parse(localStorage.getItem("count")) || [];

    myCart.forEach(function(elem){
        //Item
        let row = document.createElement("tr");
        row.setAttribute("height","200px")

        let td1 = document.createElement("td");

        let box0 = document.createElement("div");
        box0.setAttribute("id","productDetails")

        let box11 = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",elem.image);
        box11.append(image);

        let box12 = document.createElement("div");
        let name = document.createElement("h3");
        name.innerText = elem.name;
        let type = document.createElement("p");
        type.innerText = elem.use;
        let list = document.createElement("p");
        list.innerText = "\u2764 Add to My Love-It List";
        box12.append(name,type,list);

        box0.append(box11,box12);
        td1.append(box0);
        
        //price
        let td2 = document.createElement("td");
        let box3 = document.createElement("div");
        box3.setAttribute("id","price");
        let price = document.createElement("h3");
        price.innerText = elem.price;
        box3.append(price);
        td2.append(box3);

        //Quantity
        let td3 = document.createElement("td");
        let box00 = document.createElement("div");
        box00.setAttribute("id","quantity");
        let box4 = document.createElement("div");
        let btn1 = document.createElement("button");
        btn1.innerText = "-";
        btn1.addEventListener("click",function(){
            funDec(elem);
        });
        let count = document.createElement("button");
        count.innerText ="1";
        let btn2 = document.createElement("button");
        btn2.innerText = "+";
        btn2.addEventListener("click",function(){
            funInc(elem);
        });
        box4.append(btn1,count,btn2);
        let box5 = document.createElement("div");
        let isAvailabe = document.createElement("p")
        isAvailabe.innerText = "Available";
        box5.append(isAvailabe);
        box00.append(box4,box5);
        td3.append(box00);

        //Total price
        let td4 = document.createElement("td");
        let box6 = document.createElement("div");
        box6.setAttribute("id","totalPrice");
        let totalPrice = document.createElement("h3")
        totalPrice.innerText = elem.price;
        let remove = document.createElement("p");
        remove.innerText = "X";
        box6.append(totalPrice,remove);
        td4.append(box6);

        //append all
        row.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(row);

    })

    function funInc(elem){
        let jhola = {};
        count++;
        jhola["name"] = elem.name;
        jhola["price"] = elem.price;
        jhola["quantity"] = count || 1;
        document.querySelector("#quantity > div > button:nth-child(2)").innerText = quantity;
    }
    function funDec(elem){
        let jhola = {};
        count--;
        jhola["name"] = elem.name;
        jhola["price"] = elem.price;
        jhola["quantity"] = count || 1;
        document.querySelector("#quantity > div > button:nth-child(2)").innerText = quantity;
    }
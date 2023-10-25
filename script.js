let customernameinput = document.getElementById("custID");
let peopleinput = document.getElementById("people");
let customtipinput = document.getElementById("customTip");
let itemnameinput = document.getElementById("itemnameinput");
let itemqtyinput = document.getElementById("itemqtyinput");
let itempriceinput = document.getElementById("itempriceinput");
let billamt = document.getElementById("billamt");
let totalamt = document.getElementById("totalamt");


const changeName = () => {
    let nameval = document.getElementById("nameval");
    if (customernameinput.value == "") {
        nameval.innerHTML = "";
    }
    else {
        nameval.innerHTML = customernameinput.value;
        totalBill();
    }
}

const changePeople = () => {
    let peopleval = document.getElementById("peopleval");
    if (peopleinput.value == "") {
        peopleval.innerHTML = "";
    }
    else {
        peopleval.innerHTML = peopleinput.value;
        totalBill();
    }
}

const tippercenttoinput = (val) => {
    customtipinput.value = val;
    changeTip();
}

const changeTip = () => {
    let tipval = document.getElementById("tipval");
    if (customtipinput.value == "") {
        tipval.innerHTML = "";
    }
    else {
        tipval.innerHTML = customtipinput.value + "%";
        totalBill();
    }
}

const itemarray=[];

const addItem = () => {
    let itemname=itemnameinput.value;
    let itemqty=itemqtyinput.value;
    let itemprice=itempriceinput.value;

    if(itemname=="" || itemqty=="" || itemprice==""){
        alert("Please enter all the fields..");
    }
    else{
        let item={
            name:itemname,
            qty:itemqty,
            price:itemprice
        }
        itemarray.push(item);
        itemnameinput.value="";
        itemqtyinput.value="";
        itempriceinput.value="";
        showitems();
    }
}

const showitems=()=>{
    let allitems=document.getElementById("allitems");
    allitems.innerHTML="";
    for(let i=0;i<itemarray.length;i++){
        let item=itemarray[i];
        let itemdiv=document.createElement("div");
        itemdiv.classList.add("s1");

        itemdiv.innerHTML=`
        <p>${item.qty}</p>
        <p>${item.name}</p>
        <p>${item.price}</p>
        `
        allitems.appendChild(itemdiv);
    }
    totalBill();
}

const totalBill=()=>{
    let total=0;
    for(let i=0;i<itemarray.length;i++){
        let item=itemarray[i];
        total=total+(item.price*item.qty);
    }
    billamt.innerHTML="Rs " + total;
    totalamt.innerHTML="Rs " + (total + (total * customtipinput.value/100));
}



const notes =[
    {
        title: "Grocery List",
        list:["Sugar", "milk", "Ghee"]
    },
    {
        title: "Grocery List",
        list:["Sugar", "milk", "Ghee"]
    },

]

let list = document.getElementById("note-container");


function renderList(){
    const rows = notes.map((note, index) => {
        return`
        <div class="note">
                <div >
                    <p class="note-title">${note.title}</p>
                    <p class="line"> Rice - 1kg</p>
                    <p class="line">Sugar 500 g</p>
                    <p class="line">Vegetable - 500g</p>
                    <p class="line">Cooking -oil -  1l</p>
                </div>
                  <div  style=" margin-top:12px" >           
                  <img id="menu-${index}" style="width:20px" src="https://img.icons8.com/windows/32/null/menu-2.png"/>
                  </div>
                <div>
                </div>
            </div> 
        `
    })
    
    const div = `${rows.join(' ')}`;
    list.innerHTML = div;
    
}


renderList();



//pop up

var myButton = document.getElementById("myButton");
var myPopup = document.getElementById("myPopup");
var close = document.getElementById("close");

myButton.addEventListener("click", function() {
  myPopup.style.display = "block";
});

close.addEventListener("click", function() {
  myPopup.style.display = "none";
});

// Add Element

var noteTitle = document.getElementById("note-title");
var note1 = document.getElementById("note-1");
var note2 = document.getElementById("note-2");
var note3 = document.getElementById("note-3");
var note4 = document.getElementById("note-4"); 
var note5 = document.getElementById("note-5");

var add = document.getElementById("add");


add.addEventListener("click", function(){
    // get the input value from the input element

    console.log("Add Clicked")
const title = noteTitle.value;

const list = [note1.value, note2.value, note3.value, note4.value, note5.value];



const note = {
    title,
    list
}


console.log(note)

notes.push(note);

console.log(notes);

myPopup.style.display = "none";
renderList();
// clar input value


});


// Id Rmover
var menu = document.getElementById("menu");
var divToolTip = document.getElementById("divToolTip");

menu.addEventListener("click",function (e)
{
    console.log(e.target.id)
   // open the poper menu
Popper.createPopper(menu,divToolTip,{
   placement: "top",
} )

})


// Remove data from the list



let input = document.querySelector("input[type=text]");
let addBtn = document.querySelector(".addBtn");
let resultList = document.querySelector(".lists");
let arrList = [];

// addBtn.addEventListener('click',()=>{
//     resultList.innerHTML += `<label>
//                 <input type="checkbox" name="" id="">
//                 <span>${input.value}</span>
        //             <div class="action-btn">
        //         <button class="editBtn"  onclick="editModal()">Edit</button>
        //         <button class="deleteBtn" onclick="deleteModal()">Delete</button>
        //     </div>
        // </div>
//             </label>`
// });
addBtn.addEventListener('click',()=>{
    setItems(input.value);
});

document.addEventListener('DOMContentLoaded',()=>{
     showItems();
})

function setItems(item){
    arrList = getItems();
    arrList.push(item)
    localStorage.setItem("my_todo_list",JSON.stringify(arrList))
     resultList.innerHTML += `<label>
                    <input type="checkbox" name="" id="">
                    <span>${item}</span>
                </label>`
}

function getItems(){
    let totalLists =localStorage.getItem("my_todo_list")
    return JSON.parse(totalLists);
}

function showItems(){
    let totalLists = getItems();
    console.log(totalLists);
    totalLists.map(element => {
        resultList.innerHTML += `<label>
                    <input type="checkbox" name="" id="">
                    <span>${element}</span>

                </label>`
    });
}

function editModal(){
    
}


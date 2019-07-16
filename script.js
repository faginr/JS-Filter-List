// Global Variables
let filterInput = document.querySelector("#filter-input");


// Event listener for typing
filterInput.addEventListener('keyup', filterNames);

// Function that matches typed string
function filterNames(){
    // Get values
    let filterValue = document.querySelector("#filter-input").value.toUpperCase();
    let ul = document.querySelector("#names");
    let li = ul.querySelectorAll("li.collection-item");

    // loop through collection-item lis
    for(let i = 0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display= '';
        } else {
            li[i].style.display= 'none';
        }
    }
}


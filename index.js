

function getAndUpdate() {
    console.log("updating list...")
    tit = document.getElementById('title').value
    desc = document.getElementById('description').value
    roll = document.getElementById('rollNo').value
    branch = document.getElementById('branch').value
    pro = document.getElementById('Project').value
    stat = document.getElementById('status').value

    if (localStorage.getItem('itemJSON') == null) {
        itemJSONArray = [];
        itemJSONArray.push([tit, desc, roll, branch, pro, stat])
        localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray))
    }
    else {
        itemJSONArraystr = localStorage.getItem('itemJSON')
        itemJSONArray = JSON.parse(itemJSONArraystr);
        itemJSONArray.push([tit, desc, roll,branch, pro, stat])
        localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray))

    }
    update()

    // clear fields
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("Project").value = "";
    document.getElementById("status").value = "";

}
function update() {
    if (localStorage.getItem('itemJSON') == null) {
        itemJSONArray = [];
        localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray))
        
        localStorage.getItem('itemJSON', JSON.stringify(itemJSONArray))

    }
    else {
        itemJSONArraystr = localStorage.getItem('itemJSON')
        itemJSONArray = JSON.parse(itemJSONArraystr);
    }


    // POPULATE THE TABLE

    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJSONArray.forEach((element, index) => {

        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td>
            <td>${element[5]}%</td>
        
            <td>
                <button class="btn btn-primary" onclick='deleted(${index})'>Delete</button>
            </td>
        </tr>
        `
    });

    tablebody.innerHTML = str;
}
add = document.getElementById("add")
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJSONArraystr = localStorage.getItem('itemJSON')
    itemJSONArray = JSON.parse(itemJSONArraystr);

    // delete item index element from the array
    itemJSONArray.splice(itemIndex,1);
    localStorage.setItem('itemJSON', JSON.stringify(itemJSONArray));
    update();

}

function clearStorage() {
    if (confirm("Do You Want To Clear The List?")) {
        console.log("Clearing The Storage")
        localStorage.clear();
        update();
        
    }
}










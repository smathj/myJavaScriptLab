let today = new Date();
let now_year = today.getFullYear(); // 2021
let now_month = today.getMonth();
let now_hours = today.getHours();
let now_miniute = today.getMinutes();

let now_time = now_year + '년 ' + now_month + '월 ' + now_hours + '시 ' +   now_miniute + '분';

let date_node = document.getElementsByClassName('now_Date');
// var dd  = date_node.item(0);
// dd.innerHTML = now_time;

for(let i=0; i < date_node.length; i++ ) {
    let each_node  = date_node.item(i);
    each_node.innerHTML = now_time;

}

// alert(now_time );   


function fn_check(checkName, tagsName) {
    let checkBox = document.getElementsByName(checkName); // NodeList
    
    for(let i=0; i<checkBox.length; i++) {
        let each_node = checkBox.item(i);


        let total_check = document.getElementsByName(tagsName);
        let checkYN = total_check.item(0);
        if(checkYN.checked == true) {
            each_node.checked = true;    
        } else {
            each_node.checked = false;
        }


    }
}

function fn_move() {
    let checkBox = document.getElementsByName('left_Check'); // NodeList

    console.log(checkBox[0]);


    // for(let i=0; i<checkBox.length; i++) {
    //     // 각 체크된 노드
    //     let each_node = checkBox.item(i);

    //     if(each_node.checked == true) {

    //     let left_tbody = document.querySelectorAll('.left_tbody');
        
    //     console.log('----------------------------');
    //     console.log(left_tbody.item(0).);
    //     console.log('----------------------------');


    //     let clone_value = left_tbody[0].rows[i];
      


    //     let right_tr = document.getElementById('left_tbody');
    //     if(right_tr != '') {
    //         right_tr.appendChild(clone_value);
    //     }
    //     right_tr = '';
    

    //     } else {
    //         continue;
    //     }


    // }

}

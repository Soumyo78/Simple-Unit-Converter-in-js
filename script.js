function remove_dropdown_items(){
    let temp_left_items = document.getElementById('left-unit');
    let temp_right_items = document.getElementById('right-unit');

    while (temp_left_items.hasChildNodes()) {
        temp_left_items.removeChild(temp_left_items.firstChild);
    }

    while (temp_right_items.hasChildNodes()) {
        temp_right_items.removeChild(temp_right_items.firstChild);
    }
}


document.getElementById('select-menu').addEventListener("change", () =>{
    let select_ele = parseInt(document.getElementById('select-menu').value);
    switch (select_ele) {
        case 1:
            let temp_item_arr = ["Celsius", "Fahrenheit", "Kelvin"];

            remove_dropdown_items();

            for(let i=0; i<temp_item_arr.length; i++){
                let temp_arr_item = document.createElement('option');
                temp_arr_item.innerHTML = temp_item_arr[i];
                temp_arr_item.setAttribute('value', i);
                temp_arr_item.setAttribute('id', temp_item_arr[i].toLowerCase()+"-left")
                document.querySelector('#left-unit').appendChild(temp_arr_item);
            }
                
            for(let i=0; i<temp_item_arr.length; i++){
                let temp_arr_item = document.createElement('option');
                temp_arr_item.innerHTML = temp_item_arr[i];
                temp_arr_item.setAttribute('value', i);
                temp_arr_item.setAttribute('id', temp_item_arr[i].toLowerCase()+"-right")
                document.querySelector('#right-unit').appendChild(temp_arr_item);
            }
            break;

        case 2:
            let len_item_arr = ["Meter", "kilometer", "Centimeter", "Millimeter"];

            remove_dropdown_items();

            for(let i=0; i<len_item_arr.length; i++){
                let len_arr_item = document.createElement('option');
                len_arr_item.innerHTML = len_item_arr[i];
                len_arr_item.setAttribute('value', i);
                len_arr_item.setAttribute('id', len_item_arr[i].toLowerCase()+"-left")
                document.querySelector('#left-unit').appendChild(len_arr_item);
            }
                
            for(let i=0; i<len_item_arr.length; i++){
                let len_arr_item = document.createElement('option');
                len_arr_item.innerHTML = len_item_arr[i];
                len_arr_item.setAttribute('value', i);
                len_arr_item.setAttribute('id', len_item_arr[i].toLowerCase()+"-right")
                document.querySelector('#right-unit').appendChild(len_arr_item);
            }
            break;

        case 3:
            console.log("volume selected");
            break;

        case 4:
            console.log("weight selected");
            break;

        default:
            break;
    }
})

document.getElementById('convert-btn').addEventListener("click", () =>{

    let selected_parameter = document.getElementById('select-menu');
    let selected_parameter_id = selected_parameter[selected_parameter.selectedIndex].id;

    let left_box_input = document.getElementById('input-box').value;
    let right_box_output = document.getElementById('output-box');

    let left_dropdown = document.getElementById('left-unit');
    let left_dropdown_id = left_dropdown[left_dropdown.selectedIndex].id;

    let right_dropdown = document.getElementById('right-unit');
    let right_dropdown_id = right_dropdown[right_dropdown.selectedIndex].id;

    if(selected_parameter_id=="temp"){

        if((left_dropdown_id=="celsius-left" && right_dropdown_id=="celsius-right") || (left_dropdown_id=="fahrenheit-left" && right_dropdown_id=="fahrenheit-right") || (left_dropdown_id=="kelvin-left" && right_dropdown_id=="kelvin-right")){
            let result = parseFloat(left_box_input);
            right_box_output.value = result;
        }
    
        if((left_dropdown_id=="celsius-left") && (right_dropdown_id=="fahrenheit-right")){
            let result = (((9/5)*parseFloat(left_box_input))+32);
            right_box_output.value = result.toFixed(3);
        }
    
        if((left_dropdown_id=="celsius-left") && (right_dropdown_id=="kelvin-right")){
            let result = parseFloat(left_box_input)+273;
            right_box_output.value = result;
        }
    
        if((left_dropdown_id=="fahrenheit-left") && (right_dropdown_id=="celsius-right")){
            let result = ((5/9)*(parseFloat(left_box_input)-32));
            right_box_output.value = result.toFixed(3);
        }
    
        if((left_dropdown_id=="fahrenheit-left") && (right_dropdown_id=="kelvin-right")){
            let result = ((5/9)*(parseFloat(left_box_input)-32)+273);
            right_box_output.value = result.toFixed(3);
        }
    
        if((left_dropdown_id=="kelvin-left") && (right_dropdown_id=="celsius-right")){
            let result = parseFloat(left_box_input)-273;
            right_box_output.value = result;
        }
    
        if((left_dropdown_id=="kelvin-left") && (right_dropdown_id=="fahrenheit-right")){
            let result = (((9/5)*(parseFloat(left_box_input)-273))+32);
            right_box_output.value = result.toFixed(3);
        }
    
    }

    if(selected_parameter_id=="length"){
        console.log("length is selecetd");
    }

    if(selected_parameter_id=="vol"){
        console.log("vol is selecetd");
    }

    if(selected_parameter_id=="wt"){
        console.log("wt is selecetd");
    }
})
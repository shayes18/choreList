/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
var list_size = 0
if (btn) {
  btn.onclick = function() {
    var select = document.getElementById('list');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    
    // The JS works in conjunction with the 'dipped' code in style.css
    const weekly = ["Dishes", "Fill Dishwasher", "Empty Dishwasher", "Kitchen Floor", "Stovetop", "Kitchen Sink", "Kitchen Counter", "Kitchen Island", "Trash/Recyclables", "Living Room Floor", "Coffee Table", "Josh's Man Cave", "End Table by Couch", "Dining Room Table", "Dining Room Floor", "Kid's Chairs", "Hallway Floor", "Master Bedroom Floor", "Bathroom Floor", "Vanity Floor", "Vanity Mirror", "Vanity Counter", "Toilet", "Bathroom Trash", "Office Floor", "Kid's Room Floor", "Kid's Room Toys", "Kid's Trash"];
    const non_weekly = ["Kitchen Windowsill", "Oven", "Toaster Oven Area", "Fridge/Freezer", "Pantry", "Laundry Room Food Shelves", "Laundry Room Floor", "Washer/Dryer", "Recliner", "Playpen", "Living Room Couch", "Dining Room Windowsill", "Ottomans", "Hallway Dresser", "Other End Table", "Master Bedroom Bed", "Master Bedroom Closet", "Vanity Closet", "Bathtub", "Over-the-toilet Shelf", "Changing Area", "Kid's Room Closet", "Kid's Room Dresser", "Van"];
    
    
    var rand = 0
    var finished_list = []
    var list_to_use = []
    if (value == "weekly"){
      var sel = document.getElementById("list");
      if (sel.length > 0) {
        sel.remove(sel.length-sel.length);
      }
      list_size = weekly.length / 2;
      for(let l=0; l< weekly.length; l++){
        list_to_use.push(weekly[l]);
      }
      console.log(list_to_use);
      for (let i = 0; i < list_size; i++) {
        rand = Math.floor((Math.random() * list_to_use.length));
        finished_list.push(list_to_use[rand]);
        list_to_use.splice(rand,1);
        var node2 = document.createElement("LI");
        var textnode2 = document.createTextNode(finished_list[i]);
        node2.appendChild(textnode2);
        document.getElementById("list2").appendChild(node2);
      }
      for (let i = 0; i < list_size; i++) {
        var node1 = document.createElement("LI");
        var textnode1 = document.createTextNode(list_to_use[i]);
        node1.appendChild(textnode1);
        document.getElementById("list1").appendChild(node1);
      }
      console.log("Weekly: " + weekly);
      console.log("List: " + list_to_use);
      console.log(finished_list);
    }else if (value == "non_weekly"){
      var sel = document.getElementById("list");
      if (sel.length > 0) {
        sel.remove(sel.length-sel.length);
      }
      list_size = non_weekly.length / 2;
      for(let l=0; l< non_weekly.length; l++){
        list_to_use.push(non_weekly[l]);
      }
      console.log(list_to_use);
      for (let i = 0; i < list_size; i++) {
        rand = Math.floor((Math.random() * list_to_use.length));
        finished_list.push(list_to_use[rand]);
        list_to_use.splice(rand,1);
        var node2 = document.createElement("LI");
        var textnode2 = document.createTextNode(finished_list[i]);
        node2.appendChild(textnode2);
        document.getElementById("list2.5").appendChild(node2);
      }
      for (let i = 0; i < list_size; i++) {
        var node1 = document.createElement("LI");
        var textnode1 = document.createTextNode(list_to_use[i]);
        node1.appendChild(textnode1);
        document.getElementById("list1.5").appendChild(node1);
      }
      console.log("non-weekly: " + non_weekly);
      console.log("List: " + list_to_use);
      console.log(finished_list);
    
  };
}
}

function refreshFunction() {
  var lis = document.querySelectorAll('#list1 li');
  var li;
  for(var i=0; li=lis[i]; i++) {
    li.parentNode.removeChild(li);
  }
  var lis2 = document.querySelectorAll('#list2 li');
  var li2;
  for(var j=0; li2=lis2[j]; j++) {
    li2.parentNode.removeChild(li2);
  }
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

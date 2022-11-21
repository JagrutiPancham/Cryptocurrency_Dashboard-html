const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display ='block';
    console.log("menu button clicked");
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display ='none'
    console.log("closebutton clicked");
})



// chart
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Earning in $',
            data: [1257, 1967, 3557, 5435, 2543, 9863, 6789, 5432, 7857, 1020, 6534, 2434],
            backgroundColor: [
                'rgba(85,85,85, 1)'
            ],
            borderColor: [
                'rgba(41,155,99)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     responsive:true
    }
});

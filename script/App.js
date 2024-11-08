const id1 = document.getElementById('id-1');
const id2 = document.getElementById('id-2');
const id3 = document.getElementById('id-3');
const id4 = document.getElementById('id-4');

const btn = document.querySelector('.btn-s');

btn.addEventListener('click' , ()=>{
    alert('Your application will be processed in a few hours 😊')
})


document.getElementById('download-btn').addEventListener('click', function() {
    alert("Your resume is downloading..."); 
});


function showDiv(boxId) {
    const boxes = document.querySelectorAll('.container-11');
    boxes.forEach(box => box.style.opacity = 0);
    document.getElementById(boxId).style.opacity = 1;
   
}

const testButton = document.getElementById("test-button")
const time = new EventSource('/time');

testButton.addEventListener("click", function () {
    alert("Button clicked")
})

time.addEventListener('time', (e) => {
    document.getElementById("actual-time").innerHTML = e.data;
}, false);

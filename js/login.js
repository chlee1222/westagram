function highlightIdBox(){
    document.getElementById('id').style.border = "1px solid rgba(var(--c8c,168,168,168),1)";
    document.addEventListener('click', (evt) => {
        const IdBox = document.getElementById('id');
        let target = evt.target
        if(target != IdBox){
            document.getElementById('id').style.border = " 1px solid rgba(var(--ca6,219,219,219),1)";
        }
    });

}
function highlightPassWordBox(){
    document.getElementById('password').style.border = "1px solid rgba(var(--c8c,168,168,168),1)";
    document.addEventListener('click', (evt) => {
        const IdBox = document.getElementById('password');
        let target = evt.target
        if(target != IdBox){
            document.getElementById('password').style.border = " 1px solid rgba(var(--ca6,219,219,219),1)";
        }
    });
}
document.getElementById('id').addEventListener('keyup', function(){
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    if (password.length > 0 && id.length > 0) {
        if (password.length > 0 && id.length > 0) {
            console.log("hi");
            document.getElementById("button").className = "enabled";
        }
    }
    else{
        console.log("hello");
        document.getElementById("button").className = "disabled";
    }
});
document.getElementById('password').addEventListener('keyup', function(){
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    if (password.length > 0 && id.length > 0) {
        if (password.length > 0 && id.length > 0) {
            console.log("hi");
            document.getElementById("button").className = "enabled";
        }
    }
    else{
        console.log("hello");
        document.getElementById("button").className = "disabled";
    }
});

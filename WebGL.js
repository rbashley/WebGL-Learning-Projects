function main(){
    // Initiate GL Context
    const canvas = document.getElementById("display");
    const gl = canvas.getContext("webgl");

    if(gl == null){
        alert("Unable to start WebGL");
    }
}

main();
gl.clearColor(0,0,0,1);
gl.clear(gl.COLOR_BUFFER_BIT);
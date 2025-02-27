// document.getElementById("Div").addEventListener("click", makeRequest)

// async function makeRequest() {
//     try {
//         console.log("I am listening");
//         const output = document.getElementById("output")
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         console.log(res.data);
//         res.data.forEach(e => {
//             output.innerHTML = `
//             <div> Body ${e.body}</div>
//             <div> ID ${e.id}</div>
//             <div> Title ${e.title}</div>
//             `
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

function hello(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("dataID", dataId);
            resolve("found")
        }, 2000)
    })
}
async function myfunc(){
    await hello(1)
    await hello(2)
    await hello(3)
    await hello(4)
}
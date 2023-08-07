export const delyTime=async(x)=>{
    console.log("worked");
   await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()

        },x)
    })

}
import { delyTime } from "./Delay.js";


export let datainfo=[]
export const OpenWebsite=async(url,page)=>{
    // await waitFor
    // await page.goto(url)
    await  Promise.all([page.waitForNavigation({timeout:500000}),page.goto(url)])
    console.log("worked");

    await delyTime(3000)
    await loopingFunc(page)

}


const loopingFunc=async(page)=>{
   try {

    // PageExist = await page.evaluate(() => {
    //     // div.rounded.text-right.d-none.d-sm-block
    //     const parentDiv = document.querySelector("div.rounded.text-right.d-none.d-sm-block") !== null;
    //     return parentDiv
  
    //   });
    
       let pagignation=true
       while (pagignation) {
         pagignation=  await page.evaluate(()=>{
             let exist=document.querySelector(".next")!==null
            return exist
           })
           await gettingdata(page)
           if (pagignation) {
            // await page.waitForNavigation()
               await page.click(".next")
               await delyTime(5000)
               
           }
           console.log(pagignation);
   
           
       }
    
   } catch (error) {
    console.log("on next click",error);
    
   }


}





const gettingdata=async(page)=>{
    const datalength=await page.evaluate(()=>{
       const qty= document.querySelectorAll(".stamped-review")
       let allitem= Array.from(qty).map((x)=>{
       let createdAt= x.querySelector(".created")?.innerText.trim()
       let title= x.querySelector(".stamped-review-header-title")?.innerText.trim()
       let author= x.querySelector(".author")?.innerText.trim()
       let location= x.querySelector('span[data-location]')?.innerText.trim()
       let verification= x.querySelector('span[data-verified-label]')?.getAttribute('data-verified-label')
       let like= x.querySelector('.stamped-fa-thumbs-up')?.innerText.trim()?.split(";")[0]
       let dislike= x.querySelector('.stamped-fa-thumbs-down')?.innerText.trim()?.split(";")[0]
       let review= x.querySelector('.stamped-review-content-body')?.innerText.trim()
       const image = x.querySelector("div.stamped-review-image > a > img")?.getAttribute("src");
       const rating=x.querySelectorAll(".stamped-fa-star")?x.querySelectorAll(".stamped-fa-star"):""
      


       return {
        createdAt,
        title,
        author,
        location,
        verification,
        like,
        dislike,
        review,
        image,
        rating:rating.length

       }
    
    })
    return allitem

    })
    datainfo=[...datainfo,...datalength]


}
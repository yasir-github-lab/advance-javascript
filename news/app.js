
//a8f4059b475542f6b2184b012a961ff2


let searchNew = async ()=>{

    let keyword = document.getElementById("keyword").value || "sports";
    const card = document.getElementById("cards");
    const error = document.getElementById("error");
    let error_message = "Unable to find New";  

    // Get today's date
    const today = new Date();

    // Format as YYYY-MM-DD
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);
    const formattedDate = lastMonth.toISOString().split('T')[0];
    //console.log(formattedDate);
     
    try{

        let news = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${formattedDate}&sortBy=publishedAt&pageSize=41&apiKey=02fb174d8395462f8a96efe6960b908a`);
        let data = await news.json();
        //console.log(data.articles);
        card.innerHTML = '';
        if(data.articles.length == 0){
            error.innerText = error_message;
            card.classList.add("hidden");     
            error.classList.remove("hidden"); 
            return;
        }

        error.classList.add("hidden");
        card.classList.remove("hidden");
        data.articles.map(articles=>{
            console.log(articles);
            
            card.innerHTML += `<div class="shadow-md hover:shadow-[0_10px_15px_-3px_rgba(56,189,248,0.5),0_4px_6px_-2px_rgba(56,189,248,0.3)] flex flex-col bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <a href="${articles.url}" class="block w-full h-48 overflow-hidden rounded-lg">
                <img 
                    src="${articles.urlToImage ? articles.urlToImage : 'https://dummyimage.com/400x300/cccccc/000000.png&text=Placeholder'}" 
                    alt="" 
                    class="w-full h-full object-cover"
                />
                </a>
                <a href="${articles.url}">
                    <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading line-clamp-3">
                        ${articles.title}
                    </h5>
                </a>
                <p class="mb-6 text-body tracking-tight line-clamp-5">${articles.description}</p>
                <a href="${articles.url}" class="mt-auto mr-auto inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none hover:bg-blue-600 hover:text-white">
                    Read more
                    <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>`;
        });

    }catch(error){
        error.innerText = error_message;
        card.classList.add("hidden");     
        error.classList.remove("hidden"); 
    }


}


searchNew();


 document.getElementById("keyword").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchNew();
        }
    });
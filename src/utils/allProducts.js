

const allProducts = async (categorieyId) => {
     
    let url= "http://localhost:5000/products"
    if(categorieyId){
       url+=  '?categorieyId='+ categorieyId; 
    }
    
    const res = await fetch(url, {
        cache: "no-cache"
    })
    return res.json();

};

export default allProducts;
import React from 'react'

const UploadProducts = () => {
    const addProductData=()=> {
        setErrorMessage("")
         if(productData.title && productData.desc && productData.price && productData.category && productData.rating){
         // create object
             const obj = {
               title: productData.title,
                 desc: productData.desc,
                 price : productData.price,
                 category: productData.category,
                 rating: productData.rating,
           }
       
       // generate random key
           const keyRef = ref(DATABASE);
           const key = push(keyRef).key;
           obj.id = key
       // upload image to storage
           const imageRef = storageRef(STORAGE, `images/${obj.id}`)
           uploadBytes(imageRef, imgDest).then((success)=>{
           // get image link
             getDownloadURL(success.ref).then(function(imageURL){
                 obj.productImg = imageURL
                 obj.uid = isUser.uid
                 const refrenceDB = ref(DATABASE, `products/${obj.id}`)
                 set(refrenceDB,obj)
               setUploadSuccess("successfully added")
             }).catch(function(error){
                 console.log(error);
             })
         }).catch(function(error){
             console.log(error);
         })
       }else{
         setErrorMessage("please fill all field")
       }
             }
  return (
    <div>UploadProducts</div>
  )
}

export default UploadProducts
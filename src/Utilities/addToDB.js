// import { ToastContainer, toast } from 'react-toastify';


const getStoredBooking = ()=>{

    const storedBookStr = localStorage.getItem("bookList")

    if(storedBookStr){
        const storedBookData = JSON.parse(storedBookStr)
        return(storedBookData)
    }
    else{
        return [];
    }

}


// const  addToStoreDB = phnId =>{
//     const storedBookData = getStoredBooking()
//     const isExist = storedBookData.find( id => id  == phnId )  
//           if(isExist) return console.log('phn already added')
//             storedBookData.push(phnId) 
//         localStorage.setItem("bookList" , JSON.stringify(storedBookData)) 
 
// }


const addToStoreDB= (id)=>{
    const storedBookData = getStoredBooking()

    if (storedBookData.includes(id)){
        //  alert( "this is already booked")
       return ;  
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("bookList",data)
    }
       
}

//  <ToastContainer/>


export const  removeBookList = (id)=>{
    const storedBookData = getStoredBooking()  
    const remainingBookList = storedBookData.filter(doctorId => doctorId != id)
    localStorage.setItem("bookList" , JSON.stringify(remainingBookList))

    
}


export {addToStoreDB, getStoredBooking}


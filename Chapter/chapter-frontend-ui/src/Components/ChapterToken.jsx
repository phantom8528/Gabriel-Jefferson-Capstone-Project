import { useState } from "react";

function ChapterToken(){


    //Local Storage Approach - getToken function
        const _getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken; 
        // return userToken?.token; //<-- PROBLEM !!!!! - RETURNS UNDEFINED, VALUES CAN'T BE EXTRACTED !!!!!
      }

    const [token, setToken] = useState(_getToken());

      //Localstorage Approach - setToken function
      function saveToken(userToken){
        //Save the user token argument to sessionStorage
        localStorage.setItem('token', JSON.stringify(userToken));
      
      }
      return{
          setToken: saveToken,
          token
      }
}

export default ChapterToken;
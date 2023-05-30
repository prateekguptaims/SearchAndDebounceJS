const users=document.querySelector('.user-list')
const userName=document.querySelector('#user')
const userArr=[];

const getUserData=async()=>{
    try {
        const res= await fetch('https://api.github.com/users')
        const data= await res.json();
        console.log(data);
        if(data){
            users.innerHTML=""
        }
        data.map((user) => {
            const li = document.createElement('li');

             userArr.push(li);
            

            li.insertAdjacentHTML('afterbegin', 
                `
                <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                    <div>
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url}</a>
                    </div>
                 </div>
                `
            )

            users.appendChild(li);

        })
        
        
        
    } catch (error) {
        console.log(error)
    }
}



// userName.addEventListener('input',(e)=>{
//     const val= e.target.value;
//     console.log(val)
//     userArr.map((e)=>{
//         e.innerText.toLowerCase().includes(val.toLowerCase())?
//         e.classList.remove('hide'):
//         e.classList.add('hide')
//     })
// })

const debounce=(func,delay)=>{
    let timer;
    return function(...args){
        clearTimeout(timer)
       timer= setTimeout(() => {
    func(...args)
        }, delay);
    }

}
const getUser=(query)=>{
    console.log(query)
    userArr.map((e)=>{
                e.innerText.toLowerCase().includes(query.toLowerCase())?
                e.classList.remove('hide'):
                e.classList.add('hide')
            })
}

const debounceGetData= debounce(getUser,500);


userName.addEventListener('input',(e)=>{
debounceGetData(e.target.value);

})
getUserData();
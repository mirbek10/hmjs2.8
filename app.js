
const div1 = document.querySelector(".div1")
  const data = [{
    id : 1,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.aicr.org/wp-content/uploads/2020/06/peppermint-tea-on-teacup-1417945-1200x826.jpg.webp"
  },
  {
    id : 1,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.datocms-assets.com/20941/1618836401-green-tea.jpeg?auto=compress&fm=jpg&w=850"
  },

  {
    id : 3,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLkA57klLDH7kVPNMOybNF-bKAVR53WvxkH_ZTD0mxeOJ0mHNf5ncxhgavI3BAfbinJk&usqp=CAU"
  },

  {
    id : 2,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.southernliving.com/thmb/XoM6xDREX1o2gyulEUYowqQtA5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27053-SweetTea_0155_4x3-9a4ef2365a5e4a10b62478e2040fb0cb.jpg"
  },
  {
    id : 1,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.aicr.org/wp-content/uploads/2020/06/peppermint-tea-on-teacup-1417945-1200x826.jpg.webp"
  },
  {
    id : 1,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.datocms-assets.com/20941/1618836401-green-tea.jpeg?auto=compress&fm=jpg&w=850"
  },

  {
    id : 3,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLkA57klLDH7kVPNMOybNF-bKAVR53WvxkH_ZTD0mxeOJ0mHNf5ncxhgavI3BAfbinJk&usqp=CAU"
  },

  {
    id : 2,
    title:"Tea",
    disc:"lorem lorem",
    price:100,
    img:"https://www.southernliving.com/thmb/XoM6xDREX1o2gyulEUYowqQtA5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27053-SweetTea_0155_4x3-9a4ef2365a5e4a10b62478e2040fb0cb.jpg"
  },
]
  data.forEach((el)=>{
    const itemHTML =`
    <div class="border-[2px] w-[220px] h-[280px] rounded-[10px]  hover:shadow-2xl hover:border-[#09be2e] hover:scale-105  ">
    <div class=" hover:border-[#09be2e] w-[200px] h-[150px] ml-[10px]  mt-[8px]"><img class=" rounded-xl "
    src="${el.img}" alt=""></div>
    <h2 class="ml-[10px] mt-[10px] hover:text-[#09be2e]">${el.title}</h2>
    <div class="flex gap-[77px] ml-[10px] mt-[5px]">
    <h3 class="hover:text-[#09be2e]">${el.disc}</h3>
    <h3 class="hover:text-[#09be2e]">${el.price}$</h3>
    </div>
    <div class="ml-[10px] mt-[20px] flex gap-[57px]">
    <button class="btn1 border-[0.1px] border-[#09be2e] rounded-[5px] text-[#09be2e] w-[60px] h-[30px] hover:bg-[#09be2e] hover:text-[#fff] ">buy</button>
    <button class="btn2 border-[0.1px] border-[#09be2e] rounded-[5px] text-[#09be2e] w-[83px] h-[30px] hover:bg-[#09be2e] hover:text-[#fff] ">remove</button>
    </div>
    </div>`
    div1.innerHTML += itemHTML;
  })

  
  
  const btn1 = document.querySelectorAll(".btn1")
  const btn2 = document.querySelectorAll(".btn2")
  
  btn1.onclick=()=>{
    const title2 = localStorage.setItem("title","tea")
      alert("you added a cup of tea to cart")

}
  btn2.onclick=()=>{
  const title1 = localStorage.removeItem("title")
    alert("you'r purchase removed ")
}

import React,{useState} from 'react'
import { Routes ,Route,Link  } from 'react-router'
import Datas from '../datas/ProductsDatas'
import MenusData from '../datas/MenuData'
import Product from '../components/Product'
import TabMenu from '../components/TabMenu'



export default function Products() {

  
  const [products,setProducts] = useState(Datas.toReversed())
  const [menus,setMenus] = useState('all')
  const [shownProducts,setShownProducts] = useState(Datas.toReversed())



  const filterProducts = (state) => {
    MenusData.map(menu => {
      switch (state) {
        case 'all': {
          setShownProducts(products)
          break
        }
        case menu.tag: {
          const filteredProducts = products.filter(product => product.tag === menu.tag)          
          setShownProducts(filteredProducts)
          break
        }
        // default: {
        //   setShownProducts(products)
        //   break
        // }
      }
    })
  };




  return (

    <div>

        <section class="mt-[5vh] md:mt-[10vh]">

          <div class="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%] overflow-x-scroll">
          {/* overflow-y-hidden */}
              
              <div>
                  <div class="menu text-sm md:text-lg font-DanaMedium text-center text-gray-500 border-b border-gray-200">
                      <ul class="flex -mb-px">
                          <li class="me-2">
                              <button onClick={()=>{setMenus('all'); filterProducts('all')}} class={`${menus === 'all' ? "ActiveTabButton" : "inActiveTabButton" }`}>
                                  همه
                              </button>
                          </li>
                          {
                            MenusData.map(menu => (
                              <TabMenu
                                menus={menus}
                                menuTag={menu.tag}
                                onSelect={() => {
                                  setMenus(menu.tag);
                                  filterProducts(menu.tag);
                                }}
                                key={menu.id}
                                >

                                {menu.title}

                              </TabMenu>
                            ))
                          }


                      </ul>
                  </div>
              </div>
              
          </div>

        </section>

        <section class="mt-[2vh] md:mt-[8vh]">

          <div class="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">

            <div className='grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4 min-h-screen'>

              {
                shownProducts.length !== 0 ? (
                  <>
                  {shownProducts.map(product => (

                    <Product key={product.id} {...product} />

                  ))}
                  </>
                ):(
                  <>
                    <div class="text-black text-4xl font-DanaDemiBold">
                      محصولی وجود ندارد
                    </div>
                  </>
                )
                
              }


            </div>
              
          </div>

        </section>

    </div>
  )
}

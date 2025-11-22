import { useState } from 'react'
import Datas from '../datas/ProductsDatas'
import MenusData from '../datas/MenuData'
import Product from '../components/Product'
import TabMenu from '../components/TabMenu'
import { Helmet } from 'react-helmet-async'



export default function Products() {


  const [products, setProducts] = useState([...Datas].reverse())
  const [menus, setMenus] = useState('all')
  const [shownProducts, setShownProducts] = useState([...Datas].reverse())



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

    <>
      <Helmet>
        <title>سین‌شین - محصولات</title>
        <meta name="description" content="سین‌شین - محصولات" />
        <link rel="canonical" href="https://www.sinshin-foodpark.ir/products" />
        <meta property="og:title" content="پیتزا مخصوص سین شین" />
        <meta property="og:description" content=" محصولات جذابی تولید میکنه حتما به ما سر بزن سین‌شین - " />
        <meta property="og:url" content="https://www.sinshin-foodpark.ir/products" />
        <meta property="og:type" content="products" />
        <meta property="og:image" content="" />
        <meta property="article:section" content="products" />
        <meta property="article:published_time" content="2025-03-01T00:00:00+03:30" />
      </Helmet>
      <div>

        <section className="mt-[5vh] md:mt-[10vh]">

          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%] overflow-x-scroll">
            {/* overflow-y-hidden */}

            <div>
              <div className="menu text-sm md:text-lg font-DanaMedium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex -mb-px">
                  <li className="me-2">
                    <button onClick={() => { setMenus('all'); filterProducts('all') }} className={`${menus === 'all' ? "ActiveTabButton" : "inActiveTabButton"}`}>
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

        <section className="mt-[2vh] md:mt-[8vh]">

          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">

            <div className='grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4 min-h-screen'>

              {
                shownProducts.length !== 0 ? (
                  <>
                    {shownProducts.map(product => (

                      <Product key={product.id} {...product} />

                    ))}
                  </>
                ) : (
                  <>
                    <div className="text-black text-4xl font-DanaDemiBold">
                      محصولی وجود ندارد
                    </div>
                  </>
                )

              }


            </div>

          </div>

        </section>

      </div>
    </>
  )
}

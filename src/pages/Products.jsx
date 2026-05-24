import { useState,useEffect } from 'react';
import Datas from '../datas/ProductsDatas';
import MenusData from '../datas/MenuData';
import Product from '../components/Product';
import TabMenu from '../components/TabMenu';
import { Helmet } from 'react-helmet-async';
import { useLocation , useSearchParams } from 'react-router';



export default function Products() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // دریافت پارامتر menu از URL
  const menuParam = searchParams.get('menu') || 'all';

  // دریافت state از location (اگر از طریق Menu کلیک شده باشد)
  const menuData = location.state?.menuData;

  const [products, setProducts] = useState([...Datas].reverse());
  const [menus, setMenus] = useState(menuParam);
  const [shownProducts, setShownProducts] = useState([...Datas].reverse());

  // فیلتر محصولات بر اساس منو
  const filterProducts = (menuTag) => {
    if (menuTag === 'all') {
      setShownProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.tag === menuTag);
      setShownProducts(filteredProducts);
    }
  };

  // مقداردهی اولیه بر اساس پارامتر URL
  useEffect(() => {
    if (menuParam && menuParam !== 'all') {
      setMenus(menuParam);
      filterProducts(menuParam);
    } else {
      setMenus('all');
      filterProducts('all');
    }
  }, [menuParam]);

  // اگر data از طریق state دریافت شده، از آن استفاده کن
  useEffect(() => {
    if (menuData && menuData.tag) {
      setMenus(menuData.tag);
      filterProducts(menuData.tag);
    }
  }, [menuData]);

  // تابع برای تغییر تب
  const handleTabChange = (menuTag) => {
    setMenus(menuTag);
    filterProducts(menuTag);
    // به‌روزرسانی URL بدون ریلود صفحه
    window.history.pushState({}, '', `/products?menu=${menuTag}`);
  };

  return (
    <>
      <Helmet>
        <title>سین‌شین - محصولات</title>
        <meta name="description" content="سین‌شین - محصولات" />
        <link rel="canonical" href="https://www.sinshin-foodpark.ir/products" />
        <meta property="og:title" content="پیتزا مخصوص سین شین" />
        <meta property="og:description" content="محصولات جذابی تولید میکنه حتما به ما سر بزن سین‌شین" />
        <meta property="og:url" content="https://www.sinshin-foodpark.ir/products" />
        <meta property="og:type" content="products" />
        <meta property="og:image" content="" />
        <meta property="article:section" content="products" />
        <meta property="article:published_time" content="2025-03-01T00:00:00+03:30" />
      </Helmet>

      <div>
        <section className="mt-[5vh] md:mt-[10vh]">
          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%] overflow-x-scroll">
            <div>
              <div className="menu text-sm md:text-lg font-DanaMedium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex -mb-px">
                  <li className="me-2">
                    <button
                      onClick={() => handleTabChange('all')}
                      className={`${menus === 'all' ? "ActiveTabButton" : "inActiveTabButton"}`}
                    >
                      همه
                    </button>
                  </li>
                  {MenusData.map(menu => (
                    <TabMenu
                      key={menu.id}
                      menus={menus}
                      menuTag={menu.tag}
                      onSelect={() => handleTabChange(menu.tag)}
                    >
                      {menu.title}
                    </TabMenu>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[2vh] md:mt-[8vh]">
          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">
            <div className='grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4 min-h-screen'>
              {shownProducts.length !== 0 ? (
                shownProducts.map(product => (
                  <Product key={product.id} {...product} />
                ))
              ) : (
                <div className="text-black text-4xl font-DanaDemiBold col-span-full text-center">
                  محصولی وجود ندارد
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

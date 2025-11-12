import { useState } from 'react'
import Datas from '../datas/ArticlesData'
import MenusData from '../datas/MenuData'
import Article from '../components/Article'
import TabMenu from '../components/TabMenu'
import { Helmet } from 'react-helmet-async'


export default function Articles() {


    const [articles, setArticles] = useState([...Datas].reverse())
    const [menus, setMenus] = useState('all')
    const [shownArticles, setShownArticles] = useState([...Datas].reverse())


    const filterArticles = (state) => {
        MenusData.map(menu => {
            switch (state) {
                case 'all': {
                    setShownArticles(articles)
                    break
                }
                case menu.tag: {
                    const filteredArticles = articles.filter(article => article.tag === menu.tag)
                    setShownArticles(filteredArticles)
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
                <title>سین‌شین - مقالات</title>
                <meta name="description" content="سین‌شین - مقالات" />
                <link rel="canonical" href="https://www.sinshini.ir/articles" />
                <meta property="og:title" content="سین‌شین - مقالات" />
                <meta property="og:description" content="سین‌شین - مقالات" />
                <meta property="og:url" content="https://www.sinshini.ir/articles" />
                <meta property="og:type" content="articles" />
                <meta property="og:image" content="" />
                <meta property="article:section" content="" />
                <meta property="article:published_time" content="" />
            </Helmet>
            <div>

                <section className="mt-[5vh] md:mt-[10vh]">

                    <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%] overflow-y-hidden overflow-x-scroll">

                        <div>
                            <div className="menu text-sm md:text-lg font-DanaMedium text-center text-gray-500">
                                <ul className="flex -mb-px">
                                    <li className="me-2">
                                        <button onClick={() => { setMenus('all'); filterArticles('all') }} className={`${menus === 'all' ? "ActiveTabButton" : "inActiveTabButton"}`}>
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
                                                    filterArticles(menu.tag);
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

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 h-screen">

                            {
                                shownArticles.length !== 0 ? (
                                    <>
                                        {shownArticles.map(article => (


                                            <Article key={article.id} {...article} />

                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <div className="text-black text-4xl font-DanaDemiBold">
                                            مقاله ای وجود ندارد
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


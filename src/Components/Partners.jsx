import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Partners = () => {
    return (
        <div className="px-6 sm:px-20 py-4 sm:py-6">
            <div
                className="wrapper"
                name="partners"
            >
                <div className="pt-12 pb-3">
                    <h1 className="text-center sm:text-5xl text-4xl font-bold text-white">
                        Partners
                    </h1>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12 mt-6 lg:mt-16">
                        <div className="flex justify-center items-center">
                            <Link
                                href="https://finance.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKq2YNu5c2BUgaBGqpqE3VkB6KRoHDpJFbdPEhZAeAnZWaa6TYPShb9NmQvBZMATErX2e04S5ViRrXmQzUHUjmITMxoXBJf3whFm8JbmtaV9vOoHC1dOezEahWAVu3hmbDVX7Xu2lNAEBqg2FDY_lrG-jjhBGXJHJVua3j0Fg2zo"
                                className="w-[80%] sm:w-[60%] md:w-[24rem] my-16 lg:my-0 lg:w-[18rem] xl:w-[20rem] lg:h-28"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/YAHOO.png"}
                                    alt="YAHOO Image"
                                />
                            </Link>
                        </div>

                        <div className="grid place-items-center">
                            <Link
                                href="https://www.coingecko.com/"
                                className="w-[100%] lg:w-80 lg:h-44"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/COINGECKO.png"}
                                    alt="COINGECKO Image"
                                />
                            </Link>
                        </div>

                        <div className="grid place-items-center">
                            <Link
                                href="https://coinmarketcap.com/"
                                className="md:w-[60%] lg:w-80 lg:h-48"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/MARKETCAP.png"}
                                    alt="MARKETCAP Image"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12 my-3">
                        <div className="flex justify-center items-center">
                            <Link
                                href="https://www.forbes.com/"
                                className="w-[80%] sm:w-[60%] md:w-[24rem] my-16 lg:my-0 lg:w-[18rem] lg:h-28"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/FORBES.png"}
                                    alt="FORBES Image"
                                />
                            </Link>
                        </div>

                        <div className="grid place-items-center">
                            <Link
                                href="https://cryptonews.com/"
                                className="w-60 xl:w-[80%]"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/CRYPTONEWS.png"}
                                    alt="CRYPTONEWS Image"
                                />
                            </Link>
                        </div>

                        <div className="grid place-items-center">
                            <Link
                                href="https://coinsult.net/"
                                className="md:w-[60%] lg:w-80 lg:h-28 mt-16 lg:mt-0"
                                target="_blank"
                            >
                                <img
                                    src={"/public/assets/COINSULT.png"}
                                    alt="COINSULT Image"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Partners;
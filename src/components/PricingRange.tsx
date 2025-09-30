import { useState } from 'react';
import '../styles/slider.css';

export default function PricingRange() {
    const [price, setPrice] = useState(16);
    const [isYearly, setIsYearly] = useState(false);

    const finalPrice = isYearly ? price * 0.75 : price;

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-[540px] py-10 px-6 md:px-12 bg-white rounded-t-xl">
            <div className="flex flex-col items-center md:items-start w-full">
                {/* Pageviews и цена - на десктопе в ряд */}
                <div className="flex flex-col md:flex-row md:justify-between items-center w-full mb-10">
                    <p className="text-lg font-extrabold tracking-[0.15em] text-grayish-blue mb-2 md:mb-0 ">
                        {Math.round(price * 6.25)}K PAGEVIEWS
                    </p>

                    {/* Цена - на мобиле снизу, на десктопе справа */}
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-dark-desaturated-blue font-extrabold text-[40px] tracking-tight">
                            ${finalPrice.toFixed(2)}
                        </span>
                        <span className="text-grayish-blue text-sm">/ month</span>
                    </div>
                </div>

                {/* Слайдер */}
                <div className="relative w-full mb-12">
                    <input
                        type="range"
                        min="5"
                        max="26"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, hsl(174, 77%, 80%) ${
                                ((price - 5) / 21) * 100
                            }%, hsl(224, 65%, 95%) ${((price - 5) / 21) * 100}%)`,
                        }}
                    />
                </div>

                {/* Цена на мобиле - под слайдером */}
                <div className="flex md:hidden items-center justify-center gap-2 mb-8 w-full">
                    <span className="text-dark-desaturated-blue font-extrabold text-[36px] tracking-tight">
                        ${finalPrice.toFixed(2)}
                    </span>
                    <span className="text-grayish-blue text-sm">/ month</span>
                </div>

                {/* Переключатель Monthly/Yearly */}
                <div className="flex items-center justify-center md:justify-end  w-full gap-3 text-xs">
                    <span className="text-grayish-blue">Monthly Billing</span>

                    <label className="relative inline-block w-10 h-6 cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isYearly}
                            onChange={(e) => setIsYearly(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-[hsl(223,50%,87%)] rounded-full peer-checked:bg-[hsl(174,86%,45%)] peer-hover:bg-[hsl(174,77%,80%)] transition-colors duration-200"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-200"></div>
                    </label>

                    <span className="text-grayish-blue">Yearly Billing</span>
                    <span className="text-[hsl(15,100%,70%)] bg-[hsl(14,92%,95%)] text-[10px] font-extrabold px-2 py-1 rounded-full">
                        -25% <span className="hidden md:inline">discount</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function HeadLayout() {
    return (
        <div
            className="flex flex-col gap-3 min-h-[150px] items-center text-center pt-16 mb-12"
            style={{
                backgroundImage: `url(/images/pattern-circles.svg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 10px',
                backgroundSize: '140px',
            }}
        >
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark-desaturated-blue">
                Simple, traffic-based pricing
            </h2>
            <div className="md:flex md:gap-1">
                <p className="text-grayish-blue text-[15px] my-2 md:my-0">
                    Sign-up for our 30-day trial.
                </p>
                <p className="text-grayish-blue text-[15px]">No credit card required.</p>
            </div>
        </div>
    );
}

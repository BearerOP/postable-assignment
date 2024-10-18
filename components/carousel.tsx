export default function Carousel() {
  return (
    <>
      <section className="relative flex w-full flex-col items-start py-12 md:py-24 overflow-visible">
        <h3 className="mx-auto w-full max-w-6xl px-4 text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0">
          Our Features
        </h3>
        <div className="relative flex w-full gap-4 overflow-scroll px-4 pb-4 pt-3 sm:pl-0 xl:pl-36"
          style={{
            // 'paddingLeft': '144px'
          }}>
          <div className="min-w-72 max-w-fit select-none md:min-w-96">
            <img
              src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp"
              alt="Feature 1"
            />
          </div>
          <div className="min-w-72 max-w-fit select-none md:min-w-96">
            <img
              src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp"
              alt="Feature 2"
            />
          </div>
          <div className="min-w-72 max-w-fit select-none md:min-w-96">
            <img
              src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp"
              alt="Feature 3"
            />
          </div>
          <div className="min-w-72 max-w-fit select-none md:min-w-96">
            <img
              src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp"
              alt="Feature 4"
            />
          </div>
          <div className="min-w-72 max-w-fit select-none md:min-w-96">
            <img
              src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp"
              alt="Feature 5"
            />
          </div>
        </div>
      </section>
    </>
  );
}

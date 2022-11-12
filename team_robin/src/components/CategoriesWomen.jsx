import styles from "./CategoriesWomen.module.css"

export default function CategoriesWomen(){
    return (
        <>
            <div className={styles.catContMen}>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---self-care.jpg" alt="" />
                    <h3>SELF-CARE MOMENTS</h3>
                    <p>It's treat-yourself time</p>
                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---label-love.jpg" alt="" />
                    <h3>LABEL LOVE</h3>
                    <p>Nike, adidas, and more!</p>

                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg" alt="" />
                    <h3>IN-HOUSE BRANDS</h3>
                    <p>Relationship status: exclusive</p>
                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg" alt="" />
                    <h3>GO FOR GLAM</h3>
                    <p>Swipe right on these</p>
                </div>
            </div>
        </>
    )
}
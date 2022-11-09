import styles from "./CategoriesMen.module.css"

export default function CategoriesMen(){
    return (
        <>
            <div className={styles.catContMen}>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/mw/mw--treat-yoself-brands.jpg" alt="" />
                    <h3>ASOS EXCLUSIVES</h3>
                    <p>On your most-wanted list</p>
                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/mw/mw---label-love.jpg" alt="" />
                    <h3>LABEL LOVE</h3>
                    <p>Nike, adidas, and more!</p>

                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/mw/mw---self-care.jpg" alt="" />
                    <h3>SELF-CARE MOMENTS</h3>
                    <p>Gift your BFF (you, obvs)</p>
                </div>
                <div className={styles.catMen}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/mw/mw---in-house-brands.jpg" alt="" />
                    <h3>GRAND BRANDS</h3>
                    <p>Cos you deserve the best</p>
                </div>
            </div>
        </>
    )
}
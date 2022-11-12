import styles from "./BrandsSectionWomen.module.css"

export default function BrandsSectionWomen(){
    return (
        <>
            <div className={styles.brandSecCont}>
                <h2>TRENDING BRANDS</h2>
                <div className={styles.brandImg}>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
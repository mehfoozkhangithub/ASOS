import styles from "./BrandsSectionMen.module.css";

export default function BrandsSectionMen(){
    return (
        <>
            <div className={styles.brandSecCont}>
                <h2>TRENDING BRANDS</h2>
                <div className={styles.brandImg}>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
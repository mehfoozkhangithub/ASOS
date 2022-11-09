import styles from "./DiscountSectionMen.module.css"

export default function DiscountSection(){
    return (
        <>
            <div className={styles.discCont}>
                <span>
                    UP TO 50% OFF COSY GEAR !
                    <br />
                    GIVE WINTER THE COLD SHOULDER
                </span>
                <p>Limited time only. Selected styles marked down as shown</p>
            </div>
            <div className={styles.discCont2}>
                <div className={styles.discCat}>
                    <img src="https://img.shopstyle-cdn.com/sim/55/51/5551776eb560c7d575d877326e4c8c92_xlarge/asos-design-divine-chunky-sneakers-in-white.jpg" alt="" />
                    <h2>TRUE SOLEMATES</h2>
                    <p>Sure Dating is cool but...</p>
                    <button>SHOP NOW</button>
                </div>
                <div className={styles.discCat}>
                    <img src="https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-navy-with-collegiate-front-print/201403067-1-majolicablue?$n_480w$&wid=476&fit=constrain" alt="" />
                    <h2>TEAM WERK</h2>
                    <p>Big on campus</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </>
    )
}
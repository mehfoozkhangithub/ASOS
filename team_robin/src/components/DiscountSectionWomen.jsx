import styles from "./DiscountSectionWomen.module.css";

export default function DiscountSectionWomen(){
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
                    <img src="https://images.asos-media.com/products/the-north-face-reign-on-waterproof-jacket-in-cream/203317749-1-cream?$n_480w$&wid=476&fit=constrain" alt="" />
                    <h2>TREAT YO'SELF BRANDS</h2>
                    <p>Cos you deserve the best</p>
                    <button>SHOP NOW</button>
                </div>
                <div className={styles.discCat}>
                    <img src="https://images.asos-media.com/products/asos-edition-cable-knit-midi-dress-with-split-sides-in-grey/203252441-1-grey?$n_480w$&wid=476&fit=constrain" alt="" />
                    <h2>COLLUSION</h2>
                    <p>POV: the club in 2062</p>
                    <button>SHOP THE BRAND</button>
                </div>
            </div>
        </>
    )
}
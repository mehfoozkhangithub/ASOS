import styles from "./CtaSectionMen.module.css"

export default function CtaSectionMen(){
    return (
        <>
            <div className={styles.ctaSecCont}>
                <span>
                    GET GIFTING
                    <br />
                    It's never too early to start ticking 'em off the list...
                </span>
                <button>DISCOVER MORE</button>
            </div>
        </>
    )
}
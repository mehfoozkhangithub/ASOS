import styles from "./Footer.module.css";

export function Footer(){
    return (
        <>
            <div className={styles.footCont}>
                <div>
                    <h4>HELP & INFORMATION</h4>
                    <p>Help</p>
                    <p>Track Order</p>
                    <p>Delivery & Returns</p>
                    <p>Sitemap</p>
                </div>
                <div>
                    <h4>ABOUT ASOS</h4>
                    <p>About Us</p>
                    <p>Careers at ASOS</p>
                    <p>Corporate Responsibility</p>
                    <p>Investors' site</p>
                </div>
                <div>
                    <h4>MORE FROM ASOS</h4>
                    <p>Mobile & ASOS apps</p>
                    <p>ASOS Marketplace</p>
                    <p>Gift Vouchers</p>
                    <p>Black Friday</p>
                    <p>ASOS x Thrift+</p>
                </div>
                <div>
                    <h4>SHOPPING FROM:</h4>
                    <p>
                        You're in 
                        <span> India | CHANGE</span>
                        </p>
                </div>
            </div>
        </>
    )
}
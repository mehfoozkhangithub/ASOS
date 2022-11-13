import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { UserLogout } from "../AuthReducer/action";
export default function MyAccount(){
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.Auth);
    const {userData}=data;
    console.log(userData);
    const fname=userData.fname.toUpperCase();
    const lname=userData.lname.toUpperCase();
    
    const handleLogout=()=>{
        dispatch(UserLogout())
    }
    

    return (
        <>
        <Navbar/>
        <div className={styles.accPg}>
            <div className={styles.accCont}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDB6bTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjA2NkM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZ6Ii8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NHptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDB6bS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwMC0xLjEwMi0xLjA3NnpNLjE5NCA5LjU0OGE1LjczMyA1LjczMyAwIDAwMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAwMi4xMjQgMi45MTNjMS4xMzQgMS4xNiAyLjQwMiAyLjA0MiAzLjc2NiAyLjYyIDEuMzM2LjU2NSAyLjgwNy44NTggNC4zNjkuODd2LjAwMWguMDk5YzEuNTYyLS4wMTMgMy4wMzMtLjMwNiA0LjM2OC0uODcxIDEuMzY1LS41NzggMi42MzMtMS40NiAzLjc2Ni0yLjYyYTEyLjA3OCAxMi4wNzggMCAwMDIuMjA3LTMuMDc1Yy4zMzcgMS44NzIgMS4zNyAzLjYxMiAyLjg1OCA0Ljc1MyAyLjE1IDEuNjQ3IDUuMDA4IDEuOTggNy42ODMgMS43NjUgMi4wNzgtLjE2OCAzLjI2LS40MyA0Ljc0Ni0xLjMxOCAzLjYyLTIuMTYzIDQuMjItNy45NzUuNjY2LTEwLjYxLTIuNDk1LTEuODMyLTUuNjUtMS43MjUtOC40MDUtMi44NjYtLjY0NS0uMjY3LTEuMjg0LS42MTktMS43MDUtMS4xODYtLjcwMi0uOTQ3LS41OTItMi40MjcuMjQyLTMuMjU0IDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDEgMS45MTQgMS43OTggMy4xOThsNS4xMy4wMDNjLS4wODUtMi4yNTgtMS4yMDgtNC40NTItMi45NzMtNS44MDVDNTIuMDQuMiA0OS4xODItLjEzMyA0Ni41MDguMDgyIDQ0Ljg2LjIxNSA0My4xOS41NDcgNDEuNzYyIDEuNGMtMS43NzggMS4wNjItMi44MTUgMi45OC0zLjAxIDQuOTctLjYyNS0xLjE4OC0xLjQ3My0yLjI4LTIuNTMzLTMuMjZDMzMuODk4Ljk4NyAzMS4zMzQuMDE1IDI4LjUxIDBoLS4wNjZjLTIuODIyLjAxNi01LjM4Ni45ODgtNy43MDcgMy4xMS0xLjE0NiAxLjA2LTIuMDQ0IDIuMjQ5LTIuNjgxIDMuNTUtLjMyNy0xLjg5My0xLjM2NS0zLjY1Ni0yLjg2OC00LjgwOEMxMy4wNC4yMDUgMTAuMTgxLS4xMjggNy41MDYuMDg3IDUuODU4LjIyIDQuMTkuNTUgMi43NiAxLjQwNSAxLjU1MiAyLjEyNy42ODYgMy4yNDQuMTk0IDQuNTEiLz48L3N5bWJvbD48dXNlIGhyZWY9IiNhIiB3aWR0aD0iMjMiLz48dXNlIGhyZWY9IiNiIiB4PSIyMi44IiB3aWR0aD0iNTciLz48L3N2Zz4=" alt="" />
                <h2>MY ACCOUNT</h2>
                <img src="https://seal.digicert.com/seals/cascade/?tag=dQkJvi0b&referer=my.asos.com&format=png&lang=en&an=min" alt="" />
            </div>
            <div className={styles.outerCont}>
                <div>
                    <div>
                        <div className={styles.nameLog}>
                            <h1>{fname[0]+lname[0]}</h1>
                        </div>
                        <span>Hi,</span>
                        <h3>{fname+"  "+lname}</h3>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="" />
                        <h5>Account Overview</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                        <Link to={"/myorder"}><h5>My Orders</h5></Link>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt="" />
                        <Link to={"/mydetails"}><h5>My Details</h5></Link>
                        
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4=" alt="" />
                        <h5>Address book</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMmwyLTJ2MTRsLTItMmgyMGwtMiAyVjBsMiAySDB6bTIwLTJ2MTRIMFYwaDIweiIvPjxwYXRoIGQ9Ik0xIDNoMTl2NEgxeiIvPjwvZz48L3N2Zz4=" alt="" />
                        <h5>Payment Methods</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTR2MmwyLjctMmgxMS4zMDZjMS4xIDAgMS45OTQtLjkgMS45OTQtMi4wMDlWNC4wMUEyLjAwMyAyLjAwMyAwIDAwMTYuMDA2IDJIMy45OTRDMi44OTQgMiAyIDIuOSAyIDQuMDA5VjE0em0zLjMzMyAyTDAgMjBWNC4wMDlBNC4wMDIgNC4wMDIgMCAwMTMuOTk0IDBoMTIuMDEyQzE4LjIxNSAwIDIwIDEuOCAyMCA0LjAwOXY3Ljk4MkE0LjAwMiA0LjAwMiAwIDAxMTYuMDA2IDE2SDUuMzMzeiIvPjxwYXRoIGQ9Ik02IDlhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6bTQgMGExIDEgMCAxMTAtMiAxIDEgMCAwMTAgMnptNCAwYTEgMSAwIDExMC0yIDEgMSAwIDAxMCAyeiIvPjwvZz48L3N2Zz4=" alt="" />
                        <h5>Contact preferences</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNC45MyAxMmE4LjAzNiA4LjAzNiAwIDAwLTMuMzU2LTMuMTZjLjg3OC0uNTMgMS45NTgtLjg0IDMuMTI1LS44NCAyLjc0NyAwIDUuMDA4IDEuNzEgNS4zMDEgNGgtNS4wN3pNMTggNGEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bS0yIDBhMSAxIDAgMTAtMiAwIDEgMSAwIDAwMiAweiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcgMmEyIDIgMCAxMDAgNCAyIDIgMCAwMDAtNHptMCA2YTQgNCAwIDExMC04IDQgNCAwIDAxMCA4em02LjU0NCA0LjUyMmE1LjExNiA1LjExNiAwIDAwLS4yOTktLjUyMkguNzU1Yy0uMTEuMTY5LS4yMS4zNDMtLjI5OS41MjJMMS43NDcgMTRoLjI4NkMyLjQzNiAxMi4zNDEgNC40NCAxMSA3IDExYzIuNTU5IDAgNC41NjQgMS4zNDEgNC45NjcgM2guMjg2bDEuMjkxLTEuNDc4ek03IDljLTMuNjI3IDAtNi42MTMgMi4xMzgtNyA1aDE0Yy0uMzg3LTIuODYyLTMuMzczLTUtNy01eiIvPjwvZz48L3N2Zz4=" alt="" />
                        <h5>Social accounts</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIwIDE2Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMmwyLTJ2MTZsLTItMmgyMGwtMiAyVjBsMiAySDB6bTIwLTJ2MTZIMFYwaDIweiIvPjxwYXRoIGQ9Ik02IDFoMnYxNEg2eiIvPjxwYXRoIGQ9Ik0zLjkyMiA5LjMyTDcuNyA2LjQ1N2wuOTU3Ljk1Ny00LjcgMy43ODZ6Ii8+PHBhdGggZD0iTTkuNzM0IDkuMzJMNS45NTcgNi40NTcgNSA3LjQxNCA5LjcgMTEuMnoiLz48cGF0aCBkPSJNMCA3aDIwdjJIMHoiLz48ZWxsaXBzZSBjeD0iOC41IiBjeT0iNyIgcng9IjEuNSIgcnk9IjEiLz48ZWxsaXBzZSBjeD0iNS41IiBjeT0iNyIgcng9IjEuNSIgcnk9IjEiLz48L2c+PC9zdmc+" alt="" />
                        <h5>Gift cards & vouchers</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEwIDJhOCA4IDAgMTAwIDE2IDggOCAwIDAwMC0xNnptMCAxOEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwUzQuNDc3IDAgMTAgMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiLz48cGF0aCBkPSJNOSA4LjUwNXY2aDJ2LTZIOXpNOSA2YzAgLjU0OC40NTIgMSAxIDFzMS0uNDUyIDEtMS0uNDUyLTEtMS0xLTEgLjQ1Mi0xIDF6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                        <h5>Need help?</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMTJoMTBWMkg2djEwek00IDBoMTR2MTRINFYweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00IDRoMTB2MTBINHoiLz48cGF0aCBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yIDE2aDEwVjZIMnYxMHpNMCA0aDE0djE0SDBWNHoiLz48L2c+PC9zdmc+" alt="" />
                        <h5>Where's my order?</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMTJoMTBWMkg2djEwek00IDBoMTR2MTRINFYweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00IDRoMTB2MTBINHoiLz48cGF0aCBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yIDE2aDEwVjZIMnYxMHpNMCA0aDE0djE0SDBWNHoiLz48L2c+PC9zdmc+" alt="" />
                        <h5>How do I make a return?</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMTJoMTBWMkg2djEwek00IDBoMTR2MTRINFYweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00IDRoMTB2MTBINHoiLz48cGF0aCBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yIDE2aDEwVjZIMnYxMHpNMCA0aDE0djE0SDBWNHoiLz48L2c+PC9zdmc+" alt="" />
                        <h5>I need a new returns note</h5>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                        <h5 onClick={handleLogout}>Sign Out</h5>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>WELCOME TO YOUR ACCOUNT</h1>
                    </div>
                    {/* <div>
                        <h1>YOUR ACCOUNT</h1>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}
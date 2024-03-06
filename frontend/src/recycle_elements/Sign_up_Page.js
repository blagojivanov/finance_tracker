// import React from "react"
// import "./Sign_up_Page.css"
// import {Link} from "react-router-dom";
// import {ReactComponent as User} from "../images/images_svg/User.svg";
// import {ReactComponent as Lock} from "../images/images_svg/Lock.svg";
// import {ReactComponent as Email} from "../images/images_svg/Email.svg";
// import {motion} from "framer-motion";
//
// export default function Sign_up_Page(){
//     const style_login_body={
//         background:localStorage.getItem("darkTheme") ? "linear-gradient(to bottom, #1F1F1E, #59594F, #373735)" : "linear-gradient(to bottom, grey, ghostwhite, lightgrey)",
//     }
//     const style_login_buttons={
//         textDecoration: 'none',
//     }
//     const style_paragraph={
//         color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
//     }
//     const style_sign_up={
//         color: localStorage.getItem("darkTheme") ? "darkgoldenrod" : "darkgoldenrod",
//     }
//     const style_icons={
//         invert: localStorage.getItem("darkTheme") ? "invert(1)" : "",
//     }
//     const style_log_in_label={
//         color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
//     }
//     const style_input={
//         borderBottom: localStorage.getItem("darkTheme") ? "2px solid ghostwhite" : "2px solid #aca496",
//         color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
//     }
//     return(
//         <motion.div className="log_in_body" style={style_login_body}>
//             <div className="log_in_wrapper">
//                 <span className="bg_animate_3"></span>
//                 <span className="bg_animate_4"></span>
//                 <div className="form_box register">
//                     <h2 style={style_sign_up}>Sign Up</h2>
//                     <form action="#">
//                         <div className="input_box_1">
//                             <input type="text" required style={style_input}/>
//                             <label className="log_in_label" style={style_log_in_label}>Username</label>
//                             <User className="log_in_user" style={style_icons}/>
//                         </div>
//                         <div className="input_box_1">
//                             <input type="text" required style={style_input}/>
//                             <label className="log_in_label" style={style_log_in_label}>Email</label>
//                             <Email className="log_in_email" style={style_icons}/>
//                         </div>
//                         <div className="input_box_1">
//                             <input type="password" required style={style_input}/>
//                             <label className="log_in_label" style={style_log_in_label}>Password</label>
//                             <Lock className="log_in_lock" style={style_icons}/>
//                         </div>
//                         <button type="submit" className="log_in_btn">Sign Up</button>
//                         <div className="log_reg_link">
//                             <p style={style_paragraph}>Already have an account? <Link to="/log_in" className="login_link" style={style_login_buttons}>Log in</Link></p>
//                             <p style={style_paragraph}>Want to go back? <Link to="/" className="register_link" style={style_login_buttons}>Home</Link></p>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="info_text register">
//                     <h2>Create account!</h2>
//                     <p>Enter your personal details and start a journey with us.</p>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }
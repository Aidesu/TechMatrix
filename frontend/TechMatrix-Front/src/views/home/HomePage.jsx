import { useEffect, useState } from "react";
import { getUserById } from "../../api/api";
import { Link } from "react-router-dom";

export default function HomePage() {
    const userId = localStorage.getItem("user");
    const [user, setUser] = useState(null);

    if (userId) {
        useEffect(() => {
            async function fetchData() {
                const userData = await getUserById(userId);
                setUser(userData);
            }
            fetchData();
        }, [userId]);
    }

    const titleAscii = `                                                                                                    
     mmmmmmmm                      mm        mmm  mmm                                   ##              
     """##"""                      ##        ###  ###              ##                   ""              
        ##      m####m    m#####m  ##m####m  ########   m#####m  #######    ##m####   ####     "##  ##" 
        ##     ##mmmm##  ##"    "  ##"   ##  ## ## ##   " mmm##    ##       ##"         ##       ####   
        ##     ##""""""  ##        ##    ##  ## "" ##  m##"""##    ##       ##          ##       m##m   
        ##     "##mmmm#  "##mmmm#  ##    ##  ##    ##  ##mmm###    ##mmm    ##       mmm##mmm   m#""#m  
        ""       """""     """""   ""    ""  ""    ""   """" ""     """"    ""       """"""""  """  """ 
                                                                                                        
                                                                                                        `;

    return (
        <>
            <main>
                <p id="firstP">
                    &gt; Initializing TechMatrix system...
                    <br />
                    [OK] Connection established to TechMatrix database.
                    <br />
                    <br />
                    Welcome, {user ? user.username : "user"}.
                    <br />
                    <br />
                    TechMatrix is your digital gateway to the world of PC
                    components.
                    <br />
                    Explore detailed hardware specifications, compatibility
                    insights, and expert recommendations
                    <br />
                    to help you build the perfect machine — from entry-level
                    setups to extreme performance rigs.
                    <br />
                    <br />
                    &gt; Access main modules:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[1]{" "}
                    <Link to="/hardwares">Hardware Database</Link>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[2]{" "}
                    <Link to="/">Compatibility Scanner</Link>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[3]{" "}
                    <Link to="/">Build Optimizer</Link>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[4]{" "}
                    <Link to="/account">User Account</Link>
                    <br />
                    <br />
                    &gt; Tip: Use your knowledge. Upgrade with precision.
                    <br />
                    &gt; System ready. Type “start” to begin.
                    <br />
                </p>
                <pre>{titleAscii}</pre>
            </main>
        </>
    );
}

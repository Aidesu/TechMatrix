export default function HomePage() {
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
                    [OK] Connection established to hardware database.
                    <br />
                    <br />
                    Welcome, user.
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
                    &nbsp;&nbsp;&nbsp;&nbsp;[1] <a href="">Hardware Database</a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[2]{" "}
                    <a href="">Compatibility Scanner</a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[3] <a href="">Build Optimizer</a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[4] <a href="">User Account</a>
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

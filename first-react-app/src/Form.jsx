export default function Form(){
    return <div className="app-container">
        <p className="question ">Entrez les infos pour enrégistrer votre score</p>
        <form method="get" action="www.google.com" className="flex-block">
            <div className="inline-separator">
                <label className="label-class name-width" htmlFor="username">nom: </label>
                <input className="input" type="text" name="username" placeholder="enter your name"/>
            </div>
            <div className="inline-separator">
                <label className="label-class" htmlFor="password">password: </label>
                <input className="input input-pass" type="password" name="password" />

            </div>
            <input className="sub-button" type="submit" />
        </form>
    </div>
}
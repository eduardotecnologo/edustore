import React, {useState} from "react";
import illustrations from "./../assets/images/logoEsquenta.png";
import logoImg from "./../assets/images/sale.png";
import googleImg from "./../assets/images/google-icon.svg";

export function Home(){
    const [email, setEmail] = useState<any |null>(null);
    const save = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }

   return(
        <div id="page-auth">
            <aside>
                <img src={illustrations} alt="Faça suas compras facilmente em nossos canais digitais de atendimentos"/>
                <strong>Aproveite a black friday 2021</strong>
                <p>Entre no esquenta da EduStores e encontre as melhores ofertas de TVs, celulares, 
                    notebooks, livros e mais produtos. Vem ver!</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo Sales" />
                    <button className="create-acount">
                        <img src={googleImg} alt="Logo do google" />
                        Crie sua conta com o Google
                    </button>
                    <div className="separator">
                        Ou digite seu melhor e-mail para receber as melhores promoções
                    </div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite seu melhor e-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={() => save('ls_email',email )} className="promo-received" type="submit">Receber Promoções</button>
                    </form>
                </div>
            </main>
        </div>
   ) 
}
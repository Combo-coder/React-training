export default function Quiz(){

    const questionBank = [
        {
            question: "quelle est la capitale de la france ?",
            reponse: "paris",
            options: ["berlin", "rome", "paris", "abidjan"]
        },
        {
            question: "quel langage de programmation est utilisé pour le frontend?",
            reponse: "javascript",
            options: ["python", "javascript", "go", "rust"]
        },
        {
            question: "qui a créé le langaue python ?",
            reponse: "Guido van rossum",
            options: ["ada lovelace", "elon musk", "dennis richie", "Guido van rossum"]
        }
    ]

    return <div>
        <h2>Question 1</h2>
        <p className="question">{questionBank[0].question}</p>
        {questionBank[0].options.map((i) => (
            <button className="option">{i}</button> )
        )}
        <div className="nav-buttons">
            <button>Précédent</button>
            <button>suivant</button>
        </div>
    </div>
}
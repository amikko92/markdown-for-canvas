type Props = {
    html: string;
};

export function HtmlResult({ html }: Props) {
    function onCopyClick() {
        navigator.clipboard.writeText(html);
        alert("Kopierat till urklipp!");
    }
    return (
        <>
            <p>Resultat</p>
            <div>
                <button onClick={onCopyClick}>Kopiera till urklipp</button>
            </div>
            <textarea defaultValue={html}></textarea>
        </>
    );
}

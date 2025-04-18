import { ChangeEvent } from "react";

type Props = {
    onFilesSelected: (file: FileList) => void;
};

export function MarkdownFileInput({ onFilesSelected }: Props) {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement;
        const { files } = input;
        if (!files || files.length == 0) {
            console.log("No files found");
            return;
        }
        onFilesSelected(files);
    }

    return (
        <input
            id="file-input"
            type="file"
            onChange={onChange}
            accept=".txt,.md"
        />
    );
}

export async function readMarkdownFile(file: File) {
    return new Promise<string>((resolve, reject) => {
        console.log({ file });

        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                const { result } = reader;
                if (typeof result !== "string") {
                    console.error("File did not contain text");
                    return;
                }
                resolve(result);
            },
            { once: true }
        );
        reader.addEventListener(
            "error",
            () => {
                reject("Failed to read file");
            },
            { once: true }
        );

        reader.readAsText(file);
    });
}
